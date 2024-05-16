<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run()
    {
        $admin = User::create([
            'name' => 'admin',
            'phone' => '5555555555',
            'email' => 'admin@email.com',
            'password' => bcrypt('admin12345'),
        ]);

        $admin->assignRole('admin');
    }
}
