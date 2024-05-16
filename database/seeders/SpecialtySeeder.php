<?php

namespace Database\Seeders;

use App\Models\Specialty;
use Illuminate\Database\Seeder;

class SpecialtySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Specialty::create(['name' => 'amparo']);
        Specialty::create(['name' => 'penal']);
        Specialty::create(['name' => 'civil']);
        Specialty::create(['name' => 'mercantil']);
        Specialty::create(['name' => 'familiar']);
        Specialty::create(['name' => 'fiscal']);
        Specialty::create(['name' => 'administrativo']);
        Specialty::create(['name' => 'laboral']);
        Specialty::create(['name' => 'aduanal']);
        Specialty::create(['name' => 'notarial']);
        Specialty::create(['name' => 'electoral']);
        Specialty::create(['name' => 'arbitrajes']);
        Specialty::create(['name' => 'derechos humanos']);
        Specialty::create(['name' => 'derecho internacional']);
    }
}
