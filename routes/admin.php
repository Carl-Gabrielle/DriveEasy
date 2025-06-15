<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminApplicationController;
use App\Http\Controllers\ManageMaterialController;
use App\Http\Controllers\AdminScheduleController;

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::get('/dashboard', fn () =>
        Inertia::render('Admin/Dashboard')
    )->name('dashboard');

    Route::resource('applicants', AdminApplicationController::class);
    Route::resource('schedules', AdminScheduleController::class);
    Route::get('/performance', fn () =>
        Inertia::render('Admin/PerformanceRating')
    )->name('performance');
      Route::resource('materials', ManageMaterialController::class);
      Route::get('/certificates', fn () =>
        Inertia::render('Admin/Certificates')
    )->name('certificates');

});
