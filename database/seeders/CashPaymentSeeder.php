<?php

namespace Database\Seeders;

use App\Models\CashPayment;
use Illuminate\Database\Seeder;

class CashPaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CashPayment::create([
            'title' => 'Oxxo Pago Semestral',
            'plan_id' => 2,
            'price' => 599,
            'type' => 'oxxo',
            'months' => 6,
            'grace_days' => 15,
        ]);

        CashPayment::create([
            'title' => 'Oxxo Pago Anual',
            'plan_id' => 2,
            'price' => 999,
            'type' => 'oxxo',
            'grace_days' => 15,
        ]);
    }
}
