<?php

namespace App\Http\Controllers\Web\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRequest;
use App\Services\ReferralService;
use App\Services\UserService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class RegisterController extends Controller
{
    public function create(ReferralService $referralService): View
    {
        $referralService->checkReferralCode();

        return view('pages.auth.register');
    }

    public function store(UserRequest $request, UserService $userService): RedirectResponse
    {
        $user = $userService->store($request);
        Auth::login($user, true);

        return redirect()->route('welcome');
    }
}
