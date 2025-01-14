<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    protected $namespace = 'App\\Http\\Controllers';
    public function boot()
    {
        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api') // Đảm bảo các route API sử dụng prefix "api"
                ->group(base_path('routes/api.php')); // Đăng ký file routes/api.php

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
}
