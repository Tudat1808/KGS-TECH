<?php

// Trong file app/Models/Blog.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $table = 'blogs'; // Đảm bảo tên bảng chính xác

    protected $fillable = [
        'title_key', 'description_key', 'image_url', 'date' // Các cột có thể được mass assigned
    ];
}

