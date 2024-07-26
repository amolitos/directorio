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
            'title' => 'Pago Oxxo por 6 meses',
            'plan_id' => 2,
            'price' => 599,
            'type' => 'oxxo',
            'months' => 6,
            'grace_days' => 15,
        ]);

        CashPayment::create([
            'title' => 'Pago Oxxo por 1 año',
            'plan_id' => 2,
            'price' => 999,
            'type' => 'oxxo',
            'months' => 12,
            'grace_days' => 15,
        ]);

        CashPayment::create([
            'title' => 'Transferencia por 6 meses',
            'plan_id' => 2,
            'price' => 599,
            'type' => 'bank_transfer',
            'months' => 6,
            'grace_days' => 15,
        ]);

        CashPayment::create([
            'title' => 'Transferencia por 1 año',
            'plan_id' => 2,
            'price' => 999,
            'type' => 'bank_transfer',
            'months' => 12,
            'grace_days' => 15,
        ]);
    }
}
