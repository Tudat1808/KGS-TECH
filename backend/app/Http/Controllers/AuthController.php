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
    // Validate thông tin đầu vào
    $validatedData = $request->validate([
        'email' => 'required|email',
        'password' => 'required'
    ]);

    // Tìm người dùng dựa trên email
    $user = User::where('email', $validatedData['email'])->first();

    // Kiểm tra mật khẩu trực tiếp (vì mật khẩu ở dạng plaintext)
    if (!$user || $user->password !== $validatedData['password']) {
        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    // Tạo token JWT
    $token = JWTAuth::fromUser($user);

    // Trả về token và thông tin người dùng
    return response()->json([
        'message' => 'Login successful',
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth('api')->factory()->getTTL() * 60,
        'user' => $user->only('id', 'email', 'username', 'phone', 'date_of_birth', 'gender', 'role'),
    ], 200);
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

     

        return response()->json(['token' => $token], 201);
    }
}
