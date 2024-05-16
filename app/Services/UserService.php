<?php

namespace App\Services;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserService
{
    /**
     * Store a new user.
     *
     * @return User
     */
    public function store(UserRequest $request): User
    {
        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ]);

        return $user;
    }
}
