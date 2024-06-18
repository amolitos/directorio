<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\SubscriptionResource;
use App\Models\User;
use Illuminate\Http\Request;

class SubscriptionController extends Controller
{
    public function index()
    {
        return SubscriptionResource::collection(
            User::selectRaw('
                users.id,
                users.name as user,
                users.phone,
                users.email,
                plans.name as plan,
                subscriptions.created_at
            ')
                ->whereHas('subscriptions', function ($query) {
                    return $query->active();
                })
                ->join('subscriptions', 'users.id', '=', 'subscriptions.user_id')
                ->join('plans', 'subscriptions.stripe_price', '=', 'plans.stripe_price')
                ->with('profile')
                ->orderBy('subscriptions.created_at')
                ->get()
        );
    }
}
