<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory;  // Đảm bảo thêm trait này để hỗ trợ Factory

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        $permissions = [];

        // Xác định quyền dựa trên vai trò
        switch ($this->role) {
            case 'admin':
                $permissions = ['create', 'read', 'update', 'delete', 'manage_users']; // Quyền cao nhất
                break;
    
            case 'manager':
                $permissions = ['create', 'read', 'update']; // Quyền trung bình
                break;
    
            case 'user':
            default:
                $permissions = ['read']; // Quyền cơ bản
                break;
        }
    
        return [
            'role' => $this->role,
            'permissions' => $permissions, // Thêm danh sách quyền vào claims
        ];
    }

    protected $fillable = [
        'username',
        'email',
        'password',
        'phone',
        'date_of_birth',
        'gender',
        'is_active',
        'role',
    ];

    // public function setPasswordAttribute($password)
    // {
    //     $this->attributes['password'] = Hash::make($password);
    // }
    public function hasRole($role)
    {
        return $this->role === $role;
    }
}
