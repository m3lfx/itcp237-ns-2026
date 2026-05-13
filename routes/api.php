<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\AuthController;

Route::prefix('v1')->group(function () {
    Route::get('/dashboard/address-chart', [DashboardController::class, 'addressChart']);
    Route::get('/dashboard/sales-chart', [DashboardController::class, 'salesChart']);
    Route::get('/dashboard/items-chart', [DashboardController::class, 'itemsChart']);

    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::apiResource('items', ItemController::class);
    Route::apiResource('customers', CustomerController::class);
    Route::post('/items/checkout', [ItemController::class, 'postCheckout'])->name('postCheckout');
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
