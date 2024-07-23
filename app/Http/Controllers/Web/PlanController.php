<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Plan;
use Illuminate\Http\Request;

class PlanController extends Controller
{
    public function index()
    {
        $user = request()->user();

        if ($user->subscribed('default')) {
            return redirect()->route('profile.show');
        }

        $plans = Plan::orderBy('id')->get();

        return view('pages.plans.index')->with('plans', $plans);
    }

    public function show(Plan $plan)
    {
        if ($plan->stripe_price) {
            return view('pages.plans.detail')->with('plan', $plan);
        }

        return redirect()->route('plans.successful');
    }

    public function checkout(Request $request, Plan $plan)
    {
        if ($plan->stripe_price) {
            return $request->user()
                ->newSubscription('default', $plan->stripe_price)
                ->checkout([
                    'success_url' => route('plans.successful'),
                    'cancel_url' => route('plans.show', ['plan' => $plan->id]),
                ]);
        }

        return redirect()->route('plans.successful');
    }
}
