<?php

namespace Database\Seeders;

use App\Models\CompanyInfo;
use Illuminate\Database\Seeder;

class CompanyInfoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        CompanyInfo::create([
            'name' => 'Tech Solutions Ltd.',
            'email' => 'contact@techsolutions.com',
            'phone' => '0123456789',
            'address' => '123 Main Street, City, Country',
            'description' => 'Leading tech company providing top-notch solutions.',
            'founded_date' => '2010-05-20',
            'social_links' => json_encode([
                'facebook' => 'https://facebook.com/techsolutions',
                'linkedin' => 'https://linkedin.com/company/techsolutions',
                'twitter' => 'https://twitter.com/techsolutions',
            ]),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        CompanyInfo::factory()->count(10)->create();
    }
}
