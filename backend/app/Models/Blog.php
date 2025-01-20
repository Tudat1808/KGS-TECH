<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'title_key', 'description_key', 'uploaded_by', 'date_upload', 'date_updated'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'uploaded_by');
    }
}

