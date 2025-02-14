<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Kiểm tra nếu người dùng là admin
        if (Auth::user()->role !== 'admin') {
            return response()->json(['message' => 'Forbidden'], 403); // Không phải admin, cấm truy cập
        }

        return $next($request); // Nếu là admin, tiếp tục xử lý request
    }
}
