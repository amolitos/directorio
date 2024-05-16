<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (env('DB_CONNECTION') == 'mysql') {
            DB::unprepared(file_get_contents('database/data/mexico_mysql.sql'));
        }

        if (env('DB_CONNECTION') == 'pgsql') {
            DB::unprepared(file_get_contents('database/data/mexico_pg.sql'));
        }
    }
}
