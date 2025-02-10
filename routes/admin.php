<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Middleware\Admin;


Route::middleware(Admin::class)->group(function () {
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
    Route::get('/products', [AdminController::class, 'products'])->name('admin.products');
    Route::get('/orders', [AdminController::class, 'orders'])->name('admin.orders');

    Route::prefix("products")->group(function () {
        Route::get("/", [ProductController::class, 'index'])->name('admin.product.index');
        Route::get("/create", [ProductController::class, 'create'])->name('admin.product.create');
        Route::post("/create", [ProductController::class, 'store'])->name('admin.product.store');
        Route::get("/edit/{id}", [ProductController::class, 'edit'])->name('admin.product.edit');
        Route::post("/edit/{id}", [ProductController::class, 'update'])->name('admin.product.update');
        Route::get("/delete/{id}", [ProductController::class, 'destroy'])->name('admin.product.destroy');
        Route::get("/show/{id}", [ProductController::class, 'show'])->name('admin.product.show');
    });
    Route::get('/customers', [AdminController::class, 'customers'])->name('admin.customers');
    Route::get('/logout', [AdminAuthController::class, 'logout'])->name('admin.logout');
});
Route::get('/login', [AdminAuthController::class, 'login'])->name('admin.login');
Route::post('/login', [AdminAuthController::class, 'login_submit'])->name('admin.login_submit');
