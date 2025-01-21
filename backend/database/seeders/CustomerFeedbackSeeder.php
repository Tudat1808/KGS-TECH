<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\CustomerFeedback;

class CustomerFeedbackSeeder extends Seeder
{
    public function run()
    {
        CustomerFeedback::factory()->count(10)->create();
    }
}
