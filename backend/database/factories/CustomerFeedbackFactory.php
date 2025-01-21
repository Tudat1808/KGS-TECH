<?php

namespace Database\Factories;

use App\Models\CustomerFeedback;
use Illuminate\Database\Eloquent\Factories\Factory;

class CustomerFeedbackFactory extends Factory
{
    protected $model = CustomerFeedback::class;

    public function definition()
    {
        return [
            'email' => $this->faker->safeEmail(),
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'upload_date' => $this->faker->date()
        ];
    }
}
