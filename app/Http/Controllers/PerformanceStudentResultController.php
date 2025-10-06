<?php

namespace App\Http\Controllers;

use App\Models\CourseRegistration;
use App\Models\Schedule;
use App\Models\StudentApplication;
use App\Models\StudentEvaluation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PerformanceStudentResultController extends Controller
{
public function index()
{
    $user = Auth::user();
    $studentId = $user->id;

    $evaluations = StudentEvaluation::where('student_id', $studentId)
        ->orderBy('created_at', 'desc')
        ->get()
        ->groupBy('course_type');

    $evaluatedCourses = $evaluations->keys();

    $enrolledCourses = CourseRegistration::whereHas('studentApplication', function ($query) use ($studentId) {
            $query->where('user_id', $studentId);
        })
        ->pluck('course_type')
        ->unique()
        ->values();

    $examSchedules = Schedule::with(['instructor', 'courseRegistration.studentApplication'])
        ->whereHas('courseRegistration.studentApplication', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })
        ->latest()
        ->get()
        ->reject(function ($schedule) use ($evaluatedCourses) {
    return $evaluatedCourses->contains(strtolower($schedule->courseRegistration->course_type));
})

        ->map(function ($schedule) {
            return [
                'course' => $schedule->courseRegistration->course_type,
                'date' => $schedule->date,
                'time' => $schedule->time,
                'datetime' => $schedule->date . ' ' . $schedule->time,
                'instructor' => $schedule->instructor->name ?? null,
                'location' => $schedule->location,
                'exam_status' => $schedule->exam_status,
            ];
        });
        // dd($evaluations->toArray());

    return Inertia::render('Student/Performance', [
        'examSchedule' => $examSchedules,
        'evaluations' => $evaluations,
        'hasEvaluation' => $evaluations->isNotEmpty(),
        'enrolledCourses' => $enrolledCourses,
    ]);
}
}
