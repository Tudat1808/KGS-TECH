<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Authenticatable
{
    use HasFactory;  // Đảm bảo thêm trait này để hỗ trợ Factory

    protected $fillable = [
        'username',
        'email',
        'password',
        'phone',
        'date_of_birth',
        'gender',
        'is_active',
    ];
}
