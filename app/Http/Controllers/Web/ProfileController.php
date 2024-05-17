<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;

class ProfileController extends Controller
{
    public function show() : RedirectResponse
    {
        $user = request()->user();
        
        if ($user->hasProfile()) {
            return redirect()->route('lawyers', ['slug' => $user->slug]);
        }

        return redirect()->route('profile.edit');
    }
}
