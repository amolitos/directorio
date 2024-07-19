<?php

use App\Http\Controllers\Web\Auth\LoginController;
use App\Http\Controllers\Web\Auth\RegisterController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\LawyerController;
use App\Http\Controllers\Web\PlanController;
use App\Http\Controllers\Web\ProfileController;
use App\Http\Controllers\Web\SchoolController;
use App\Http\Middleware\EnsureUserIsSubscribed;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::view('privacy', 'pages.privacy')->name('privacy');
Route::view('terms', 'pages.terms')->name('terms');

Route::view('search', 'pages.search')->name('search');
Route::get('lawyers/{slug}', [LawyerController::class, 'index'])->name('lawyers');

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store'])->name('login');
    Route::get('register', [RegisterController::class, 'create'])->name('register');
    Route::post('register', [RegisterController::class, 'store'])->name('register');
});

Route::prefix('landing')->name('landing.')->group(function() {
    Route::view('/', 'pages.landing.index')->name('index');
    Route::view('master-class', 'pages.landing.master-class')->name('master-class');
});

Route::group(['middleware' => 'auth:web'], function () {
    Route::get('logout', [LoginController::class, 'destroy'])->name('logout');
    Route::view('welcome', 'pages.welcome')->name('welcome');

    Route::prefix('plans')->name('plans.')->group(function() {
        Route::get('/', [PlanController::class, 'index'])->name('index');
        Route::get('{plan}/checkout', [PlanController::class, 'checkout'])->name('checkout');
        Route::view('successful', 'pages.plans.successful')->name('successful');
    });

    Route::prefix('profile')->name('profile.')->group(function() {
        Route::view('edit', 'pages.profile.edit')->name('edit');
        Route::get('show', [ProfileController::class, 'show'])->name('show');
    });

    Route::prefix('school')->name('school.')->group(function() {
        Route::get('/', [SchoolController::class, 'index'])->name('index');
        Route::get('videos/{id}', [SchoolController::class, 'video'])->name('video');
        Route::get('live', [SchoolController::class, 'live'])
            ->name('live')
            ->middleware([EnsureUserIsSubscribed::class]);
    });

    Route::view('calendar', 'pages.lawyer.calendar')
        ->name('calendar')
        ->middleware([EnsureUserIsSubscribed::class]);
});
