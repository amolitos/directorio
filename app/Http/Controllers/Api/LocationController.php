<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\City;
use App\Models\State;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function states()
    {
        return State::orderBy('name')->get();
    }

    public function cities(Request $request)
    {
        return City::orderBy('name')
            ->where('state_id', $request->state_id)
            ->get();
    }
}
