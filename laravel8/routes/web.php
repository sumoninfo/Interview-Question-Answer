<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $collection = collect([1, 2, 3, 4, 5, 6, 7]);

    $chunks = $collection->chunk(4);

    return $chunks->toArray();
    return view('welcome');
});
Route::get('array/{function}', [\App\Http\Controllers\ArrayController::class, 'index']);
