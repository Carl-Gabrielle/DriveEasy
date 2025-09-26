<?php

use App\Http\Controllers\ProfileController;
use App\Models\Schedule;
use App\Models\StudentApplication;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    if (Auth::check()) {
        switch (Auth::user()->role) {
            case 'admin':
                return redirect('/admin/dashboard');
            case 'instructor':
                return redirect('/instructor/dashboard');
        }
        $user = Auth::user();
        $schedules = Schedule::with(['instructor', 'courseRegistration.studentApplication'])
            ->whereHas('courseRegistration.studentApplication', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->latest()
            ->get();
              $application = StudentApplication::where('user_id', $user->id)->first();
        return Inertia::render('Dashboard', [
            'schedule' => $schedules,
            'application' => $application,
        ]);
    }

    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::get('/admin/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified', 'admin'])->name('admin.dashboard');


Route::get('/instructor/dashboard', function () {
    return Inertia::render('Instructor/Dashboard');
})->middleware(['auth', 'verified', 'instructor'])->name('instructor.dashboard');
       
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
require __DIR__.'/instructor.php';
require __DIR__.'/admin.php';
require __DIR__.'/student.php';
require __DIR__.'/auth.php';