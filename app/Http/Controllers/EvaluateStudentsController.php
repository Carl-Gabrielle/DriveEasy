<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use App\Models\StudentEvaluation;
use App\Models\Schedule;

class EvaluateStudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    return Inertia::render('Instructor/EvaluateStudents', [
            'students' => [], 
            'success' => session('success'),
          
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */

public function store(Request $request)
{
    $validated = $request->validate([
        'student_id' => 'required|exists:users,id',
        'course_type' => 'required|string|in:theoretical,practical',
        'scores' => 'required|array',
        'total_score' => 'required|integer',
        'remark' => 'required|string',
        'instructor_notes' => 'nullable|string',
    ]);

    StudentEvaluation::create($validated);

    return back()->with('success', 'Evaluation saved!');
}


    /**
     * Display the specified resource.
     */
public function show(Request $request, string $id)
{
    $selectedCourseType = $request->query('courseType'); 

    $student = User::with([
        'studentApplication.courseRegistrations' => function($query) {
            $query->select('id', 'student_application_id', 'course_type');
        }
    ])->findOrFail($id);

    return Inertia::render('Instructor/EvaluateStudents', [
        'student' => $student->loadMissing('studentApplication.courseRegistrations'),
        'courseType' => $selectedCourseType,
        'success' => session('success'),
    ]);
}
public function downloadCertificate(Request $request)
{
    $courseType = $request->query('courseType');
    $studentId = Auth::id();

    $evaluation = StudentEvaluation::where('student_id', $studentId)
        ->where('course_type', $courseType)
        ->first();

    if (!$evaluation) {
        abort(404, 'Certificate not available.');
    }

    $pdf = app('dompdf.wrapper');
    $pdf->loadView('certificate', [
        'student' => Auth::user(),
        'courseType' => $courseType,
        'evaluation' => $evaluation
    ]);

   return $pdf->stream("Certificate-{$courseType}.pdf");

}


    /**
     * Show the form for editing the specified resource.
     */
   public function edit($id)
{
   //
}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
