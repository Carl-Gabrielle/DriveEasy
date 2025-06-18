<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AdminApplicationController;
use App\Http\Controllers\ManageMaterialController;
use App\Http\Controllers\AdminScheduleController;
use App\Http\Controllers\CertificateController;
use App\Http\Controllers\ProfileController;

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
   Route::get('/certificates', [CertificateController::class, 'index'])->name('admin.certificates.index');
    Route::post('/certificates/{id}/revoke', [CertificateController::class, 'revoke'])->name('admin.certificates.revoke');
    Route::post('/certificates/{id}/reissue', [CertificateController::class, 'reissue'])->name('admin.certificates.reissue');
 Route::get('profile', [ProfileController::class, 'admin'])->name('profile.admin');
});
