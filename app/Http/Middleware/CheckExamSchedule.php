<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Schedule;
use Carbon\Carbon;

class CheckExamSchedule
{
    public function handle(Request $request, Closure $next)
{
    $student = Auth::user();
    $now = now();

    $schedules = Schedule::whereHas('courseRegistration.studentApplication', function ($query) use ($student) {
        $query->where('user_id', $student->id);
    })->get();

    $activeSchedule = $schedules->first(function ($schedule) use ($now) {
        return $schedule->date === $now->toDateString();
    });

    if (!$activeSchedule) {
        return redirect()->route('dashboard')
            ->with('error', 'You are not scheduled for an exam at this time.');
    }

    return $next($request);
}

}
