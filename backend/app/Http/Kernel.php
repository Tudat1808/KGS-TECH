<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * Global HTTP middleware stack.
     * Áp dụng cho tất cả các request.
     */
    protected $middleware = [
        \App\Http\Middleware\TrustProxies::class, // Middleware kiểm tra proxy tin cậy
        \Fruitcake\Cors\HandleCors::class, // Middleware xử lý CORS
        \Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance::class, // Ngăn truy cập khi hệ thống bảo trì
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class, // Xác minh kích thước dữ liệu POST
        \App\Http\Middleware\TrimStrings::class, // Xóa khoảng trắng đầu/cuối chuỗi trong request
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class, // Chuyển chuỗi rỗng thành null
    ];

    /**
     * Middleware groups.
     * Chia middleware theo nhóm "web" và "api".
     */
    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\EncryptCookies::class, // Mã hóa cookie
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class, // Thêm cookie vào response
            \Illuminate\Session\Middleware\StartSession::class, // Bắt đầu session
            \Illuminate\View\Middleware\ShareErrorsFromSession::class, // Chia sẻ lỗi từ session cho view
            \App\Http\Middleware\VerifyCsrfToken::class, // Middleware bảo vệ CSRF
            \Illuminate\Routing\Middleware\SubstituteBindings::class, // Middleware để binding tham số vào route
        ],

        'api' => [
            \Illuminate\Routing\Middleware\SubstituteBindings::class, // Middleware route binding cho API
            'throttle:60,1', // Giới hạn số lượng request API
            \Illuminate\Http\Middleware\HandleCors::class, // Cho phép Cross-Origin Resource Sharing (CORS)
        ],
    ];

    /**
     * Route middleware.
     * Áp dụng cho từng route cụ thể.
     */
    protected $routeMiddleware = [
        'auth' => \App\Http\Middleware\Authenticate::class, // Xác thực người dùng
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class, // Xác thực cơ bản
        'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class, // Thiết lập cache header
        'can' => \Illuminate\Auth\Middleware\Authorize::class, // Middleware kiểm tra quyền
        'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class, // Middleware chuyển hướng nếu đã đăng nhập
        'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class, // Yêu cầu xác nhận mật khẩu
        'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class, // Kiểm tra chữ ký URL
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class, // Middleware giới hạn số lượng request
        'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class, // Kiểm tra email đã xác nhận chưa
    ];
}
