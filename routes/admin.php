<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified', 'admin'])->prefix('admin')->name('admin.')->group(function () {

    Route::get('/dashboard', fn () =>
        Inertia::render('Admin/Dashboard')
    )->name('dashboard');

    Route::get('/application', fn () =>
        Inertia::render('Admin/Applications')
    )->name('application');

    Route::get('/course-registration', fn () =>
        Inertia::render('Admin/CourseApprovals')
    )->name('course.approvals');

    Route::get('/schedule', fn () =>
        Inertia::render('Admin/Schedules')
    )->name('schedule');

    Route::get('/performance', fn () =>
        Inertia::render('Admin/PerformanceRating')
    )->name('performance');

    Route::get('/manage-materials', fn () =>
        Inertia::render('Admin/ManageMaterials')
    )->name('manage.materials');

       Route::get('/interventions', fn () =>
        Inertia::render('Admin/Interventions')
    )->name('interventions');

      Route::get('/certificates', fn () =>
        Inertia::render('Admin/Certificates')
    )->name('certificates');

});
