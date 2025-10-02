<?php

namespace App\Http\Controllers;

use App\Models\Schedule;
use App\Models\StudentEvaluation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PerformanceStudentResultController extends Controller
{
 public function index()
{
    $studentId = Auth::id();
    $user = Auth::user();
    $evaluations = StudentEvaluation::where('student_id', $studentId)
                    ->orderBy('created_at', 'desc')
                    ->get()
                    ->groupBy('course_type');

 $examSchedules= Schedule::with(['instructor', 'courseRegistration.studentApplication'])
    ->whereHas('courseRegistration.studentApplication', function ($query) use ($user) {
        $query->where('user_id', $user->id);
    })
    ->latest()
    ->get()
    ->map(function ($schedule) {
        return [
            'course' => $schedule->courseRegistration->course_type,
            'date' => $schedule->date,
            'time' => $schedule->time,
             'datetime' => $schedule->date . ' ' . $schedule->time,
            'instructor' => $schedule->instructor->name ?? null,
            'location' => $schedule->location,
        ];
    });


    // dd($examSchedules->toArray());

    return Inertia::render('Student/Performance', [
        'examSchedule' => $examSchedules,
        'evaluations' => $evaluations,
        'hasEvaluation' => $evaluations->isNotEmpty(),
    ]);
}


}
