<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use Exception;

class AdminController extends Controller
{
    // Lấy danh sách tất cả người dùng
    public function index()
    {
        $users = User::all();
        return response()->json($users, 200);
        if (auth()->user()->role !== 'admin') {
            return response()->json(['message' => 'Unauthorized'], 403);
        }
    
        return response()->json(User::all());
    }

    // Tạo một người dùng mới
    
    public function store(Request $request)
    {
        // Log thông tin dữ liệu nhận được
        Log::info('Register data received:', $request->all());

        // Validate dữ liệu từ request
        $validatedData = $request->validate([
            'email' => 'required|string|email|max:255|unique:users', // Bắt buộc, email duy nhất
            'password' => 'required|string|min:8', // Bắt buộc, tối thiểu 8 ký tự
            'username' => 'nullable|string|max:255', // Không bắt buộc
            'phone' => 'nullable|string|max:15', // Không bắt buộc
            'date_of_birth' => 'nullable|date', // Không bắt buộc
            'gender' => 'nullable|in:male,female,other', // Không bắt buộc
            'is_active' => 'nullable|boolean', // Không bắt buộc
            'role' => 'nullable|in:admin,user,manager', // Không bắt buộc, mặc định là 'user'
        ]);

        // Gán giá trị mặc định cho các trường không bắt buộc
        $userData = [
            'email' => $validatedData['email'],
            'password' => $validatedData['password'],
            'username' => $validatedData['username'] ?? null,
            'phone' => $validatedData['phone'] ?? null,
            'date_of_birth' => $validatedData['date_of_birth'] ?? null,
            'gender' => $validatedData['gender'] ?? 'other',
            'is_active' => $validatedData['is_active'] ?? true,
            'role' => $validatedData['role'] ?? 'user', // Mặc định là 'user'
        ];

        // Tạo người dùng
        try {
            $user = User::create($userData);

            Log::info('User registered successfully:', ['user_id' => $user->id]);

            // Trả về phản hồi JSON
            return response()->json([
                'message' => 'User registered successfully',
                'user' => $user,
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error in user registration:', ['error' => $e->getMessage()]);

            return response()->json([
                'message' => 'Failed to register user',
                'error' => $e->getMessage(),
            ], 500);
        }
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
            'password' => 'nullable|string|min:8',
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
