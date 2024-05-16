<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RoleSeeder::class);
        $this->call(LocationSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(PlanSeeder::class);
        $this->call(PlanFeatureSeeder::class);
        $this->call(DegreeSeeder::class);
        $this->call(SpecialtySeeder::class);
        $this->call(ServiceSeeder::class);
    }
}
