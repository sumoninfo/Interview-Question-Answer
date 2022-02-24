<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class TestJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        sleep(4);
        $message = "Test Job was completed";
        Log::emergency("Emergency: {$message}");
        Log::alert("Alert: {$message}");
        Log::critical("Critical: {$message}");
        Log::error("Error: {$message}");
        Log::warning("Warning: {$message}");
        Log::notice("Notice: {$message}");
        Log::info("Info: {$message}");
        Log::debug("Debug: {$message}");

    }
}
