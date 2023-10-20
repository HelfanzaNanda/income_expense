<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\ProfileController;
use App\Models\Category;
use App\Models\Transaction;
use App\Models\Type;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [LandingController::class, 'home']);
Route::post('/transaction', [LandingController::class, 'transaction'])->name('transaction');
Route::delete('/transaction/{id}', [LandingController::class, 'deleteTransaction']);
Route::get('category/options/{typeId}', [LandingController::class, 'categories']);



// Route::get('/', function () {
//     return Inertia::render('Landing', [

//         'types' => Type::query()->get(),
//         'categories' => Category::query()->get(),
//         'transactions' => Transaction::query()->get(),

//         // 'canLogin' => Route::has('login'),
//         // 'canRegister' => Route::has('register'),
//         // 'laravelVersion' => Application::VERSION,
//         // 'phpVersion' => PHP_VERSION,
//     ]);
// });



// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// require __DIR__.'/auth.php';
