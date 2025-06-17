<?php

namespace App\Http\Controllers;

use App\Models\StudentEvaluation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class PerformanceStudentResultController extends Controller
{
 public function index()
{
    $studentId = Auth::id();

    $evaluations = StudentEvaluation::where('student_id', $studentId)
                    ->orderBy('created_at', 'desc')
                    ->get()
                    ->groupBy('course_type');

    return Inertia::render('Student/Performance', [
        'evaluations' => $evaluations,
        'hasEvaluation' => $evaluations->isNotEmpty(),
    ]);
}

}
