<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return UserResource::collection(
            User::orderBy('id')->get()
        );
    }

    public function update(Request $request, User $user)
    {
        $request->validate([
            'password' => 'required|string|min:8|max:25|confirmed'
        ]);

        $user->password = bcrypt($request->password);
        $user->saveOrFail();

        return response()->json([
            'success' => true
        ]);
    }
}
