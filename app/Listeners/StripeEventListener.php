<?php

namespace App\Listeners;

use App\Jobs\PlanPaymentJob;
use Laravel\Cashier\Events\WebhookReceived;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class StripeEventListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(WebhookReceived $event): void
    {
        // $out = new \Symfony\Component\Console\Output\ConsoleOutput();
        // $out->writeln(json_encode($event));

        if ($event->payload['type'] === 'charge.succeeded')
        {
            $object = $event->payload['data']['object'];
            $type = $object['payment_method_details']['type'];

            $stripeId = $object['id'];
            $customer = $object['customer'];
            $cashPaymentId = $object['metadata']['cash_payment_id'];

            if ($type === 'oxxo' || $type === 'customer_balance')
            {
                $data = [
                    'customer' => $customer,
                    'cash_payment_id' => $cashPaymentId,
                    'stripe_id' => $stripeId
                ];

                $job = new PlanPaymentJob($data);
                dispatch($job)->afterResponse();
            }
        }
    }
}
