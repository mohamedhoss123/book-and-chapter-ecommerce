<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\Admin;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
Route::domain('admin.localhost')->group(function () {
    // Route::middleware(Admin::class)->group(function () {
        Route::get('/', [AdminController::class, 'dashboard'])->name('admin.dashboard');
        Route::get('/products', [AdminController::class, 'products'])->name('admin.products');
        Route::get('/orders', [AdminController::class, 'orders'])->name('admin.orders');
        Route::get('/customers', [AdminController::class, 'customers'])->name('admin.customers');
        Route::get('/logout', [AdminController::class, 'logout'])->name('admin.logout');
    // });
    Route::get('/login',[AdminController::class, 'login'])->name('admin.login');
    Route::post('/login',[AdminController::class, 'login_submit'])->name('admin.login_submit');
});

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



require __DIR__.'/auth.php';
