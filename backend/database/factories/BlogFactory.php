<?php

namespace Database\Factories;

use App\Models\Blog;
use Illuminate\Database\Eloquent\Factories\Factory;

class BlogFactory extends Factory
{
    protected $model = Blog::class;

    public function definition()
    {
        return [
            'title_key' => $this->faker->sentence(),
            'description_key' => $this->faker->paragraph(),
            'uploaded_by' => \App\Models\User::factory(),
            'date_upload' => now(),
            'date_updated' => now()
        ];
    }
}

