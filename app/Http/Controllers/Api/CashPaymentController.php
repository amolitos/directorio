<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CashPayment;
use App\Services\CashPaymentService;

class CashPaymentController extends Controller
{
    public function index()
    {
        $query = CashPayment::orderBy('id')->orderBy('type');

        $query->when(request()->has('plan_id'), function ($q) {
            return $q->where('plan_id', request('plan_id'));
        });

        return $query->get();
    }

    public function create(CashPayment $cashPayment, CashPaymentService $cashPaymentService)
    {
        $payment = $cashPaymentService->createPaymentIntent($cashPayment);

        return $payment;
    }
}
