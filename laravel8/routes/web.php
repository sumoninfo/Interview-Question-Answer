<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::get('array/{function}', [\App\Http\Controllers\ArrayController::class, 'index']);
