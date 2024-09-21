<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestimonyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('home');

Route::get('/order', function () {
    return Inertia::render('Order', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/product', function () {
    return Inertia::render('Product', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/product/{id}', [ProductController::class, 'show'])->name('product.show');


Route::get('/portfolio', function () {
    return Inertia::render('Portfolio', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/howto', function () {
    return Inertia::render('Howto', [
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.adm');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/admin/order', [OrderController::class, 'index'])->name('order.index');
    Route::get('/admin/product', [ProductController::class, 'index'])->name('product.index');
    Route::get('/admin/testimony', [TestimonyController::class, 'index'])->name('testimony.index');
    Route::get('/admin/portfolio', [PortfolioController::class, 'index'])->name('portfolio.index');

    Route::get('/admin/testimony/update/{id}', [TestimonyController::class, 'edit'])->name('testimony.edit');
    Route::post('/admin/testimony/update/{id}', [TestimonyController::class, 'update'])->name('testimony.update');
    Route::delete('/admin/testimony/delete/{id}', [TestimonyController::class, 'destroy'])->name('testimony.destroy');
    Route::get('/admin/testimony/create', [TestimonyController::class, 'create'])->name('testimony.create');
    Route::post('/admin/testimony/store', [TestimonyController::class, 'store'])->name('testimony.store');

    
    Route::get('/admin/product/update/{id}', [ProductController::class, 'edit'])->name('product.edit');
    Route::post('/admin/product/update/{id}', [ProductController::class, 'update'])->name('product.update');
    Route::delete('/admin/product/delete/{id}', [ProductController::class, 'destroy'])->name('product.destroy');
    Route::get('/admin/product/create', [ProductController::class, 'create'])->name('product.create');
    Route::post('/admin/product/store', [ProductController::class, 'store'])->name('product.store');


    Route::get('/admin/order/update/{id}', [OrderController::class, 'edit'])->name('order.edit');
    Route::post('/admin/order/update/{id}', [OrderController::class, 'update'])->name('order.update');
    Route::delete('/admin/order/delete/{id}', [OrderController::class, 'destroy'])->name('order.destroy');
    Route::put('/order/{order}/status', [OrderController::class, 'updateStatus'])->name('order.updateStatus');

    Route::get('/admin/portfolio/update/{id}', [PortfolioController::class, 'edit'])->name('portfolio.edit');
    Route::post('/admin/portfolio/update/{id}', [PortfolioController::class, 'update'])->name('portfolio.update');
    Route::delete('/admin/portfolio/delete/{id}', [PortfolioController::class, 'destroy'])->name('portfolio.destroy');
    Route::get('/admin/portfolio/create', [PortfolioController::class, 'create'])->name('portfolio.create');
    Route::post('/admin/portfolio/store', [PortfolioController::class, 'store'])->name('portfolio.store');


});

Route::post('/order/store', [OrderController::class, 'store'])->name('order.store');


require __DIR__.'/auth.php';

