<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
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
        $validatedData = $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'phone' => 'nullable|string',
            'date_of_birth' => 'nullable|date',
            'gender' => 'nullable|in:male,female,other',
            'is_active' => 'nullable|boolean',
            'role' => 'required|in:admin,user,manager',
        ]);

        $user = User::create([
            'username' => $validatedData['username'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'phone' => $validatedData['phone'] ?? '',
            'date_of_birth' => $validatedData['date_of_birth'] ?? null,
            'gender' => $validatedData['gender'] ?? 'other',
            'is_active' => $validatedData['is_active'] ?? true,
            'role' => $validatedData['role'],
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user,
        ], 201);
    }

    // Hiển thị thông tin một người dùng cụ thể
    public function show($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        return response()->json($user, 200);
    }

    // Cập nhật thông tin một người dùng
    public function update(Request $request, $id)
    {
        Log::info('Updating user with ID:', ['id' => $id]);
        
        $user = User::findOrFail($id);
        // $this->authorize('update', $user);
    
        $validatedData = $request->validate([
            'username' => 'nullable|string|max:255',
            'email' => 'nullable|string|email|max:255|unique:users,email,' . $id,
            'password' => 'nullable|string|min:8|confirmed',
            'phone' => 'nullable|string',
            'date_of_birth' => 'nullable|date',
            'gender' => 'nullable|in:male,female,other',
            'is_active' => 'nullable|boolean',
            'role' => 'nullable|in:admin,user,manager',
        ]);
    
        if (!empty($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }
    
        $user->update(array_filter($validatedData));
    
        Log::info('User updated: ' . $user->id);
    
        return response()->json(['message' => 'User updated successfully', 'user' => $user], 200);

    }
    

    // Xóa người dùng
    public function destroy($id)
    {
        $user = User::findOrFail($id);

        $user->delete();

        Log::info('User deleted: ' . $user->id);

        return response()->json(['message' => 'User deleted successfully'], 204);
    }
}
