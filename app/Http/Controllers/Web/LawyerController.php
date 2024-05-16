<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\View\View;

class LawyerController extends Controller
{
    public function index($slug): View
    {
        $lawyer = User::findBySlug($slug);
        $lawyer->load(
            'profile',
            'profile.city',
            'profile.degree',
            'profile.services',
            'profile.state',
            'profile.specialties',
        );

        if (! $lawyer->profile) {
            abort(404);
        }

        
        return view('pages.lawyer.index')->with('lawyer', $lawyer);
    }
}
