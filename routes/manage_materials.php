<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ManageMaterialController;

Route::middleware(['auth', 'verified', 'admin'])
    ->prefix('admin')
    ->name('admin.')
    ->group(function () {
        Route::resource('materials', ManageMaterialController::class);
    });
