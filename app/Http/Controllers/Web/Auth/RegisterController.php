<?php

namespace App\Http\Controllers\Web\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function create()
    {
        return view('pages.auth.register');
    }

    public function store(UserRequest $request, UserService $userService)
    {
        $user = $userService->store($request);
        Auth::login($user, true);

        return redirect()->route('welcome');
    }
}
