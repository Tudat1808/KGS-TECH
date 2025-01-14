<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogPostController;
use App\Http\Controllers\UserController;

Route::get('/', function () {
    return view('welcome');
});
