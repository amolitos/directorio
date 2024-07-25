<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\View\View;

class HomeController extends Controller
{
    public function index(): View
    {
        SEOTools::setTitle(env('APP_NAME'));
        SEOTools::setDescription(env('SEO_DESCRIPTION'));
        SEOTools::opengraph()->addImage(asset('images/logo-seo.jpg'));

        return view('pages.home');
    }
}
