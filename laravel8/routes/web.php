<?php

use App\Models\Order;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('array/{function}', [\App\Http\Controllers\ArrayController::class, 'index']);


//================Laravel telscoped routes====================

Route::get('/dumps', function () {
    $user1 = \App\Models\User::query()->find(1)->toArray();
    $user2 = \App\Models\User::query()->find(2)->toArray();
    dump($user1);
    dump($user2);
    return "Dump completed";
});


Route::get('/delete', function () {
    $user = \App\Models\User::query()->first();
    $user->delete();
    return "User deleted";
});

Route::get('/events', function () {
    event(new \App\Events\SomeEvent(\App\Models\User::query()->first()));
    return "Event fired";
});

Route::get('/notifications', function () {
    $user = \App\Models\User::query()->first();
    $user->notify(new \App\Notifications\SomeNotification());
    return "Notification sent";
});


Route::get('/job', function () {
    \App\Jobs\TestJob::dispatch();
});


Route::get('/cache', function () {
    $value = \Illuminate\Support\Facades\Cache::remember('user', 1, function () {
        return \App\Models\User::query()->first();
    });
    return "User cached for one minute";
});

Route::get('/redis', function () {
    \Illuminate\Support\Facades\Redis::enebleEvents();
    \Illuminate\Support\Facades\Redis::set('name', 'Sumon');
    \Illuminate\Support\Facades\Redis::get('name');
    return "Redis cached";
});

Route::get('/exceptions', function () {
    throw new Exception('This is a test exception');
});

Route::get('/mail', function () {
    $details = [
        'title' => 'Mail from Sumon Dev',
        'body'  => 'This is for testing email using smtp'
    ];
    Mail::to('mmsumon799@gmail.com')->send(new \App\Mail\MyTestMail($details));

    dd("Email is Sent.");
});


//================Laravel horizon routes====================
Route::get('/horizon-test', function () {
//    $order = \App\Models\Order::query()->first();
//
//    $recipient = 'hello@example.com';
//
//    Mail::to($recipient)->send(new \App\Mail\OrderShipped($order));
//
//    return 'Sent order ' . $order->id;


    $order = Order::query()->first();
    \App\Jobs\SendOrderEmail::dispatch($order);

    Log::info('Dispatched order ' . $order->id);
    return 'Dispatched order ' . $order->id;
});
