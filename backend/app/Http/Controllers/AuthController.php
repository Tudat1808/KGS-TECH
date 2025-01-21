<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // Validate the input
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        try {
            if (!$token = JWTAuth::attempt($validated)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            \Log::error("JWT Error: " . $e->getMessage());
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // Optionally add more details to the response
        $user = auth()->user();
        return response()->json([
            'token' => $token,
            'user' => [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email
            ]
        ]);
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
