<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class CompanyInfoFactory extends Factory
{
    protected $model = \App\Models\CompanyInfo::class;

    public function definition()
    {
        return [
            'name' => $this->faker->company(),
            'email' => $this->faker->unique()->companyEmail(),
            'phone' => $this->faker->phoneNumber(),
            'address' => $this->faker->address(),
            'description' => $this->faker->catchPhrase(),
            'founded_date' => $this->faker->date(),
            'social_links' => [
                'facebook' => $this->faker->url(),
                'linkedin' => $this->faker->url(),
                'twitter' => $this->faker->url(),
            ],
        ];
    }
}
