<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\DashboardController;

Route::prefix('v1')->group(function () {
    Route::get('/dashboard/address-chart', [DashboardController::class, 'addressChart']);

    Route::apiResource('items', ItemController::class);
    Route::apiResource('customers', CustomerController::class);
    Route::post('/items/checkout', [ItemController::class, 'postCheckout'])->name('postCheckout');
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
