<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CashPayment;

class CashPaymentController extends Controller
{
    public function index()
    {
        $query = CashPayment::orderBy('type');

        $query->when(request()->has('verified'), function ($q) {
            return $q->where('plan_id', request('plan_id'));
        });

        return $query->get();
    }

    public function intent(CashPayment $cashPayment)
    {
        $user = request()->user();

        $payment = $user->payWith(
            $cashPayment->price * 100,
            [$cashPayment->type],
            ['metadata' => ['cash_payment_id' => $cashPayment->id]]
        );

        return response()->json([
            'name' => $user->name,
            'email' => env('APP_DEBUG', true) ? 'succeed_immediately@email.com' : '$user->email',
            'secret' => $payment->client_secret,
        ]);
    }

    /* public function bankTransfer(CashPayment $cashPayment)
    {
        $user = request()->user();

        $payment =  Cashier::stripe()->paymentIntents->create([
            'amount' => $cashPayment->price * 100,
            'customer' => $user()->stripe_id,
            'currency' => 'mxn',
            'automatic_payment_methods' => ['enabled' => true],
            'return_url' => 'https://example.com/return_url',
            'payment_method_data' => ['type' => 'customer_balance'],
            'confirm' => true,
        ]);

        return response()->json([
            'name' => $user->name,
            'email' => $user->email,
            'secret' => $payment->client_secret,
        ]);
    } */
}
