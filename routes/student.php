<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentLearningMaterialController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\CourseRegistrationController;
use App\Http\Controllers\StudentScheduleController;


Route::middleware(['auth', 'verified', 'student'])->group(function () {
    Route::get('/application', fn () =>
        Inertia::render('Student/Application')
    )->name('application');
    Route::get('/student/applications', [ApplicationController::class, 'index'])->name('student.applications');
    Route::post('/student/applications', [ApplicationController::class, 'store'])->name('student.applications.store');

 Route::resource('course-registration', CourseRegistrationController ::class);

     Route::resource('student-schedule', StudentScheduleController ::class);

    Route::get('/performance', fn () =>
        Inertia::render('Student/Performance')
    )->name('performance');

  Route::get('/learning-materials', [StudentLearningMaterialController::class, 'index'])
    ->name('learning.materials');
});
