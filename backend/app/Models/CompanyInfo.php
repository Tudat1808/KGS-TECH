<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CompanyInfo extends Model
{
    use HasFactory;

    protected $table = 'company_info';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
        'description',
        'founded_date',
        'social_links',
    ];

    protected $casts = [
        'social_links' => 'array',
        'founded_date' => 'date',
    ];
}
