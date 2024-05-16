<?php

namespace App\Listeners;

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
        /*$out = new \Symfony\Component\Console\Output\ConsoleOutput();
        $out->writeln(json_encode($event->payload));

        if ($event->payload['type'] === 'customer.subscription.updated') {
            $stripe = $event->payload['data']['object'];
        }*/
    }
}
