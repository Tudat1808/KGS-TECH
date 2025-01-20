<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run()
    {
        \App\Models\Blog::factory()->count(10)->create();
    }
}
