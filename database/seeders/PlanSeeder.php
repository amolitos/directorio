<?php

namespace Database\Seeders;

use App\Models\Plan;
use Illuminate\Database\Seeder;

class PlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Plan::create([
            'name' => 'Plan Gratuito',
            'description' => 'Para principiantes en el derecho.',
            'price' => 0
        ]);

        Plan::create([
            'name' => 'Plan Legal Market',
            'description' => 'Aquellos que desean vender sus services profesionales.',
            'price' => 99,
        ]);

        Plan::create([
            'name' => 'Plan Legal Strategy',
            'description' => 'Para posicionar tu office y marca en el top de ventas.',
            'price' => 599,
        ]);
    }
}
