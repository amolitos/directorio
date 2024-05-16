<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\LawyerSearchResource;
use App\Models\Profile;

class SearchController extends Controller
{
    public function index()
    {
        $query = Profile::query();

        $query->when(request('state') != 0, function ($q) {
            return $q->where('state_id', request('state'));
        });

        $query->when(request()->has('specialties'), function ($q) {
            return $q->whereHas('specialties', function ($sq) {
                return $sq->whereIn('specialty_id', request('specialties'));
            })->get();
        });

        $query->when(request()->has('services'), function ($q) {
            return $q->whereHas('services', function ($sq) {
                return $sq->whereIn('service_id', request('services'));
            })->get();
        });

        $search = $query->with('specialties')->with('services')->get();

        return LawyerSearchResource::collection($search);
    }
}
