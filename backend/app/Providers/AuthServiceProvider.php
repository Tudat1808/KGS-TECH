<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Các chính sách được đăng ký cho ứng dụng của bạn.
     *
     * @var array
     */
    protected $policies = [
         // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Đăng ký bất kỳ dịch vụ xác thực nào.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Ví dụ về việc định nghĩa một Gate:
        Gate::define('edit-settings', function ($user) {
            return $user->isAdmin;
        });
    }
}
