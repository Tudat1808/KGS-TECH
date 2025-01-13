<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/api/posts', [BlogPostController::class, 'index']);


// Định nghĩa các route cho UserController
Route::apiResource('users', UserController::class);
