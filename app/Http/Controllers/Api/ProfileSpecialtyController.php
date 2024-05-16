<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\ProfileSpecialty;
use App\Models\Specialty;
use Illuminate\Http\Request;

class ProfileSpecialtyController extends Controller
{
    public function index()
    {
        $specialties = request()->user()->profile->specialties;

        return $specialties;
    }

    public function store(Request $request)
    {
        $request->validate(['specialties' => 'required|array|min:1']);

        $profile = $request->user()->profile;
        $specialties = $request->specialties;

        foreach ($specialties as $value) {
            $specialty = Specialty::firstOrCreate(
                ['name' => $value],
                ['name' => $value]
            );
            ProfileSpecialty::firstOrCreate(
                ['profile_id' => $profile->id, 'specialty_id' => $specialty->id],
                ['specialty' => $specialty->id]
            );
        }

        ProfileSpecialty::where('profile_id', $profile->id)->whereHas('specialty', function($q) use ($specialties) {
            $q->whereNotIn('name', $specialties);
        })->delete();

        return response()->json(['success' => true]);
    }
}
