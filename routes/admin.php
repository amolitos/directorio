<?php

use App\Http\Controllers\Web\Admin\UserController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'role:admin'], function() {
    Route::view('home', 'pages.admin.home')->name('home');

    Route::view('users', 'pages.admin.users')->name('users');
});
