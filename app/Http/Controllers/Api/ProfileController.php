<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileMetadataRequest;
use App\Http\Requests\ProfileRequest;
use App\Models\Profile;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    public function index()
    {
        $profile = request()->user()->profile;

        return response()->json($profile, $profile ? 200 : 404);
    }

    public function store(ProfileRequest $request)
    {
        $user = $request->user();
        $request->merge(['user_id' => $user->id]);

        $profile = Profile::updateOrCreate(['user_id' => $user->id], $request->all());

        return response()->json($profile);
    }

    public function metadata(ProfileMetadataRequest $request)
    {
        $profile = $request->user()->profile;
        $profile->biography = $request->biography;

        if ($request->has('photo')) {
            if ($profile->photo) {
                if (Storage::disk('public')->exists($profile->photo)) {
                    Storage::disk('public')->delete($profile->photo);
                }
            }

            $profile->photo = Storage::disk('public')->put('lawyers', $request->file('photo'));
        }

        $profile->saveOrFail();

        return response()->json($profile);
    }
}
