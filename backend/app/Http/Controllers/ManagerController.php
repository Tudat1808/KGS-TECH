<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class ManagerController extends Controller
{
    // Lấy danh sách tất cả người dùng
    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
    }

    // Tạo một người dùng mới
    public function store(Request $request)
    {
        Log::info('Received data:', $request->all());
        $validatedData = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'role' => 'required|in:admin,user,manager',
        ]);
    
        Log::info('Validated data:', $validatedData);
    
        try {
            $user = User::create([
                'username' => $validatedData['username'],
                'email' => $validatedData['email'],
                'password' => Hash::make($validatedData['password']),
                'role' => $validatedData['role'],
            ]);
    
            Log::info('User created successfully:', ['user_id' => $user->id]);
            return response()->json([
                'message' => 'User created successfully',
                'user' => $user,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error in user creation:', ['error' => $e->getMessage()]);
            return response()->json([
                'message' => 'Failed to create user',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Cập nhật thông tin một người dùng
    public function update(Request $request, $id)
    {
        Log::info('Updating user with ID:', ['id' => $id]);

        if (!in_array(auth()->user()->role, ['manager', 'admin'])) {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
        
        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'username' => 'nullable|string|max:255',
            'email' => 'nullable|string|email|max:255|unique:users,email,' . $id,
            'password' => 'nullable|string|min:8',
        ]);
    
        if (!empty($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }
    
        $user->update(array_filter($validatedData));
    
        Log::info('User updated: ' . $user->id);
    
        return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);
    }
}
