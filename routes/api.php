<?php

use App\Http\Controllers\Api\Admin\SubscriptionController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\CashPaymentController;
use App\Http\Controllers\Api\DegreeController;
use App\Http\Controllers\Api\LocationController;
use App\Http\Controllers\Api\ProfileController;
use App\Http\Controllers\Api\ProfileServiceController;
use App\Http\Controllers\Api\ProfileSpecialtyController;
use App\Http\Controllers\Api\SearchController;
use App\Http\Controllers\Api\ServiceController;
use App\Http\Controllers\Api\SpecialtyController;
use Illuminate\Support\Facades\Route;

Route::get('states', [LocationController::class, 'states']);
Route::get('cities', [LocationController::class, 'cities']);

Route::get('specialties', [SpecialtyController::class, 'index']);
Route::get('services', [ServiceController::class, 'index']);

Route::get('search', [SearchController::class, 'index']);

Route::group(['middleware' => 'auth:web'], function () {
    Route::get('degrees', [DegreeController::class, 'index']);

    Route::prefix('profile')->group(function() {
        Route::get('/', [ProfileController::class, 'index']);
        Route::post('/', [ProfileController::class, 'store']);
        Route::post('metadata', [ProfileController::class, 'metadata']);

        Route::prefix('specialties')->group(function() {
            Route::get('/', [ProfileSpecialtyController::class, 'index']);
            Route::post('/', [ProfileSpecialtyController::class, 'store']);
        });
        Route::prefix('services')->group(function() {
            Route::get('/', [ProfileServiceController::class, 'index']);
            Route::post('/', [ProfileServiceController::class, 'store']);
        });
    });

    Route::prefix('cash-payments')->group(function() {
        Route::get('/', [CashPaymentController::class, 'index']);
        Route::get('{cashPayment}/intent', [CashPaymentController::class, 'intent']);
    });

    Route::prefix('appointments')->group(function() {
        Route::get('/', [AppointmentController::class, 'index']);
        Route::post('/', [AppointmentController::class, 'store']);
        Route::patch('{id}', [AppointmentController::class, 'update']);
        Route::delete('{id}', [AppointmentController::class, 'destroy']);
    });

    Route::prefix('admin')->middleware('role:admin')->group(function () {
        Route::prefix('users')->group(function() {
            Route::get('/', [UserController::class, 'index']);
            Route::patch('{user}', [UserController::class, 'update']);
        });

        Route::prefix('subscriptions')->group(function() {
            Route::get('/', [SubscriptionController::class, 'index']);
        });
    });
});
