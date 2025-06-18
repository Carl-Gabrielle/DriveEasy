<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AssignedStudentsController;
use App\Http\Controllers\EvaluateStudentsController;
use App\Http\Controllers\ProfileController;



Route::middleware(['auth', 'verified', 'instructor'])->prefix('instructor')->name('instructor.')->group(function () {
    Route::resource('assignedStudents', AssignedStudentsController::class);
    Route::resource('evaluateStudents',EvaluateStudentsController::class);
      Route::get('/profile', [ProfileController::class, 'instructor'])->name('profile.instructor');
});
