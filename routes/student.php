<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\StudentLearningMaterialController;
use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\CourseRegistrationController;
use App\Http\Controllers\PerformanceStudentResultController;
use App\Http\Controllers\StudentScheduleController;
use App\Http\Controllers\EvaluateStudentsController;
use App\Http\Controllers\ExamController;

Route::middleware(['auth', 'verified', 'student'])->group(function () {

    Route::get('/application', fn () =>
        Inertia::render('Student/Application')
    )->name('application');
    
    Route::get('/student/applications', [ApplicationController::class, 'index'])->name('student.applications');
    Route::post('/student/applications', [ApplicationController::class, 'store'])->name('student.applications.store');
    Route::resource('course-registration', CourseRegistrationController ::class);
   Route::resource('student-schedule', StudentScheduleController ::class);
   Route::get('/student/Performance', [PerformanceStudentResultController::class, 'index'])->name('student.performance');
   Route::get('/learning-materials', [StudentLearningMaterialController::class, 'index'])->name('learning.materials');
      Route::post('/student/certificate/request', action: [PerformanceStudentResultController::class, 'requestCertificate'])
        ->name('student.certificate.request');
          Route::get('/certificate/download', [EvaluateStudentsController::class, 'downloadCertificate'])
        ->name('certificate.download');
  Route::get('/exam', [ExamController::class, 'show'])
    ->middleware(['auth', 'check.exam.schedule'])
    ->name('exam.show');

     Route::post('/exam', [ExamController::class, 'store'])->name('exam.store');
});