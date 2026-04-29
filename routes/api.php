<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ItemController;


Route::apiResource('customers', CustomerController::class);
Route::apiResource('items', ItemController::class);
Route::post('/items/checkout', [ItemController::class, 'postCheckout'])->name('postCheckout');


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');