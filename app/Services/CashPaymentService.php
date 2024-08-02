<?php

namespace App\Services;

use App\Models\CashPayment;
use Laravel\Cashier\Cashier;

class CashPaymentService
{
    /**
     * Store a referral code.
     *
     * @return void
     */
    public function createPaymentIntent(CashPayment $cashPayment): array
    {
        $user = request()->user();

        if (! $user->stripe_id) {
            $user->createAsStripeCustomer();
        }

        $price = $cashPayment->price * 100;
        $metadata = ['metadata' => ['cash_payment_id' => $cashPayment->id]];
        $data = [];

        if ($cashPayment->type == 'oxxo') {
            $payment = $user->payWith(
                $price,
                ['oxxo'],
                $metadata
            );

            $data = [
                'name' => $user->name,
                'email' => env('APP_DEBUG', true) ? 'succeed_immediately@email.com' : $user->email,
                'secret' => $payment->client_secret,
            ];
        }

        if ($cashPayment->type == 'bank_transfer') {
            $payment =  Cashier::stripe()->paymentIntents->create([
                'amount' => $price,
                'customer' => $user->stripe_id,
                'currency' => env('CASHIER_CURRENCY', 'mxn'),
                'automatic_payment_methods' => ['enabled' => true],
                'return_url' => url()->previous(),
                'payment_method_data' => ['type' => 'customer_balance'],
                'confirm' => true,
                $metadata,
            ]);

            $data = [
                'url' => $payment['next_action']['display_bank_transfer_instructions']['hosted_instructions_url'],
            ];
        }

        return $data;
    }
}
