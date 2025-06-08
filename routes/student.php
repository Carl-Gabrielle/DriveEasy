<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified', 'student'])->group(function () {
    Route::get('/application', fn () =>
        Inertia::render('Student/Application')
    )->name('application');

    Route::get('/course-registration', fn () =>
        Inertia::render('Student/CourseRegistration')
    )->name('course.registration');

    Route::get('/schedule', fn () =>
        Inertia::render('Student/Schedule')
    )->name('schedule');

    Route::get('/performance', fn () =>
        Inertia::render('Student/Performance')
    )->name('performance');

    Route::get('/learning-materials', fn () =>
        Inertia::render('Student/LearningMaterials')
    )->name('learning.materials');
});
