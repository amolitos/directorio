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

        $query->when(request('city') != 0, function ($q) {
            return $q->where('city_id', request('city'));
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

        $query->when(request()->has('verified'), function ($q) {
            return $q->whereNotNull('verified_at');
        });

        $search = $query
            ->with('specialties')
            ->with('services')
            ->orderByRaw('verified_at IS NULL, id')
            ->paginate(20);

        return LawyerSearchResource::collection($search);
    }
}
