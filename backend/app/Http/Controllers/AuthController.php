<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Hash;


class AuthController extends Controller
{
//     public function login(Request $request)
// {
//     // Validate the input
//     $validated = $request->validate([
//         'email' => 'required|email',
//         'password' => 'required'
//     ]);

//     try {
//         if (!$token = JWTAuth::attempt($validated)) {
//             \Log::info('Login attempt', ['email' => $request->email, 'result' => Auth::check()]);
//             return response()->json(['error' => 'Invalid credentials provided'], 401);
//         }
//     } catch (JWTException $e) {
//         \Log::error("JWT Error: " . $e->getMessage());
//         return response()->json(['error' => 'Could not create token'], 500);
//     }

//     $user = auth()->user();
//     \Log::info('Successful login for user ID ' . $user->id);
//     return response()->json([
//         'token' => $token,
//         'user' => [
//             'id' => $user->id,
//             'name' => $user->name,
//             'email' => $user->email
//         ]
//     ]);
// }
public function login(Request $request)
    {
        try {
            $credentials = $request->only('email', 'password');
            \Log::info('Login Credentials:', $credentials);

            $user = User::where('email', $credentials['email'])->first();
            if (!$user) {
                \Log::error('User Not Found');
                return response()->json(['message' => 'Invalid credentials'], 401);
            }

            // So sánh hash mật khẩu
            \Log::info('Hashed Password from DB:', ['password' => $user->password]);
            if (!Hash::check($credentials['password'], $user->password)) {
                \Log::error('Password Mismatch');
                return response()->json(['message' => 'Invalid credentials'], 401);
            }

            // Tạo token từ thông tin user
            $token = JWTAuth::fromUser($user);
            \Log::info('Generated Token:', ['token' => $token]);

            // Trả cả token và thông tin user trong response
            return response()->json([
                'message' => 'Login successful',
                'access_token' => $token,
                'user' => $user, // Trả thông tin đầy đủ của user
            ], 200);
        } catch (\Exception $e) {
            \Log::error('Login Error:', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Server Error'], 500);
        }
    }



    public function logout(Request $request)
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
        } catch (JWTException $e) {
            \Log::error("JWT Logout Error: " . $e->getMessage()); // Log the error for debugging
            return response()->json(['error' => 'could_not_invalidate_token'], 500);
        }

        return response()->json(['message' => 'Successfully logged out']);
    }

        public function register(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed',
        ]);

        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
        ]);

        $token = $user->createToken('YourAppToken')->accessToken;

        return response()->json(['token' => $token], 201);
    }
}
