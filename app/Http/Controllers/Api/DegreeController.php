<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Degree;

class DegreeController extends Controller
{
    public function index()
    {
        return Degree::orderBy('id')->get();
    }
}
