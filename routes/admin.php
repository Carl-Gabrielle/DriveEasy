<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminApplicationController;
use App\Http\Controllers\ManageMaterialController;

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::get('/dashboard', fn () =>
        Inertia::render('Admin/Dashboard')
    )->name('dashboard');

 
  Route::resource('applicants', AdminApplicationController::class);

    Route::get('/course-registration', fn () =>
        Inertia::render('Admin/CourseApprovals')
    )->name('course.approvals');

    Route::get('/schedule', fn () =>
        Inertia::render('Admin/Schedules')
    )->name('schedule');

    Route::get('/performance', fn () =>
        Inertia::render('Admin/PerformanceRating')
    )->name('performance');
      Route::resource('materials', ManageMaterialController::class);

      Route::get('/certificates', fn () =>
        Inertia::render('Admin/Certificates')
    )->name('certificates');

});
