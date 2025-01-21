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
            'email' => 'nullable|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'phone' => 'nullable|string',
            'date_of_birth' => 'nullable|date',
            'gender' => 'nullable|in:male,female,other',
            'is_active' => 'required|boolean',
        ]);

        $user = User::create([
            'username' => $validatedData['username'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
            'phone' => $validatedData['phone'],
            'date_of_birth' => $validatedData['date_of_birth'],
            'gender' => $validatedData['gender'],
            'is_active' => $validatedData['is_active'] ?? true,
        ]);

        Log::info('New user created: ' . $user->id);

        return response()->json($user, 201);
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
        $user = User::findOrFail($id);
        $this->authorize('update', $user);  // Check for authorization

        $validatedData = $request->validate([
            'username' => 'string|max:255',
            'email' => 'string|email|max:255|unique:users,email,' . $id,
            'password' => 'nullable|string|min:8|confirmed',
            'phone' => 'string',
            'date_of_birth' => 'nullable|date',
            'gender' => 'in:male,female,other',
            'is_active' => 'boolean',
        ]);

        if (!empty($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }

        $user->update($validatedData);

        Log::info('User updated: ' . $user->id);

        return response()->json($user, 200);
    }

    // Xóa người dùng
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $this->authorize('delete', $user);  // Check for authorization

        $user->delete();

        Log::info('User deleted: ' . $user->id);

        return response()->json(['message' => 'User deleted successfully'], 204);
    }
}
