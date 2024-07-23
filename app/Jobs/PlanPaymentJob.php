<?php

namespace App\Jobs;

use App\Models\CashPayment;
use App\Models\PlanPayment;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class PlanPaymentJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $data;

    /**
     * Create a new job instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $user = User::where('stripe_id', $this->data['customer'])->first();
        $cashPayment = CashPayment::find($this->data['cash_payment_id']);

        PlanPayment::create([
            'user_id' => $user->id,
            'cash_payment_id' => $cashPayment->id,
            'stripe_id' => $this->data['stripe_id'],
            'start_at' => Carbon::now()->toDateString(),
            'ends_at' => Carbon::now()->addMonths($cashPayment->months)->toDateString(),
        ]);
    }
}
