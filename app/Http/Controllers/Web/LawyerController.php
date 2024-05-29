<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\User;
use Artesaos\SEOTools\Facades\SEOTools;
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

        SEOTools::setTitle($lawyer->name);
        SEOTools::setDescription('Visita mi perfil en el Directorio Nacional de Abogados');
        SEOTools::opengraph()->addImage(asset('storage/' . $lawyer->profile->photo));
        SEOTools::twitter()->setSite($lawyer->profile->twitter);

        return view('pages.lawyer.index')->with('lawyer', $lawyer);
    }
}
