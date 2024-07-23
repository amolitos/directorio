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

            if ($object['payment_method_details']['type'] === 'oxxo')
            {
                $data = [
                    'customer' => $object['customer'],
                    'cash_payment_id' => $object['metadata']['cash_payment_id'],
                    'stripe_id' => $object['id']
                ];

                $job = new PlanPaymentJob($data);
                dispatch($job)->afterResponse();
            }
        }
    }
}
