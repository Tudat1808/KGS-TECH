<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyInfoController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CustomerFeedbackController;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:api')->group(function() {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/register', [AuthController::class, 'register']);

Route::get('/company-info', [CompanyInfoController::class, 'index']); 
Route::put('/company-info/{id}', [CompanyInfoController::class, 'update']);

// GET routes
Route::get('/users', [UserController::class, 'index']);  // GET all users
Route::get('/users/{id}', [UserController::class, 'show']);  // GET a specific user by ID

// POST route
Route::post('/users', [UserController::class, 'store']);  // Create a new user

// PUT/PATCH and DELETE routes
Route::put('/users/{id}', [UserController::class, 'update']);  // Update user by ID
Route::delete('/users/{id}', [UserController::class, 'destroy']);  // Delete user by ID

// Blog routes
Route::get('/blogs', [BlogController::class, 'index']);  // Get all blogs
Route::get('/blogs/{id}', [BlogController::class, 'show']);  // Get a specific blog
Route::post('/blogs', [BlogController::class, 'store']);  // Create a new blog
Route::put('/blogs/{id}', [BlogController::class, 'update']);  // Update a blog
Route::delete('/blogs/{id}', [BlogController::class, 'destroy']);  // Delete a blog

// Route để lấy tất cả các phản hồi
Route::get('/feedback', [CustomerFeedbackController::class, 'index']);

// Route để lấy một phản hồi cụ thể bởi ID
Route::get('/feedback/{id}', [CustomerFeedbackController::class, 'show']);

// Route để tạo một phản hồi mới
Route::post('/feedback', [CustomerFeedbackController::class, 'store']);

// Route để cập nhật thông tin phản hồi
Route::put('/feedback/{id}', [CustomerFeedbackController::class, 'update']);

// Route để xóa phản hồi
Route::delete('/feedback/{id}', [CustomerFeedbackController::class, 'destroy']);
