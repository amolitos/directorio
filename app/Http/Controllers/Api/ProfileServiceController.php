<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProfileService;
use App\Models\Service;
use Illuminate\Http\Request;

class ProfileServiceController extends Controller
{
    public function index()
    {
        $services = request()->user()->profile->services;

        return $services;
    }

    public function store(Request $request)
    {
        $request->validate(['services' => 'required|array|min:1']);

        $profile = $request->user()->profile;
        $services = $request->services;

        foreach ($services as $value) {
            $service = Service::firstOrCreate(
                ['name' => $value],
                ['name' => $value]
            );
            ProfileService::firstOrCreate(
                ['profile_id' => $profile->id, 'service_id' => $service->id],
                ['service' => $service->id]
            );
        }

        ProfileService::where('profile_id', $profile->id)->whereHas('service', function($q) use ($services) {
            $q->whereNotIn('name', $services);
        })->delete();

        return response()->json(['success' => true]);
    }
}
