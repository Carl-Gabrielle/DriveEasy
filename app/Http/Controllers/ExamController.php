<?php

namespace App\Http\Controllers;

use App\Models\ExamAttempt;
use App\Models\ExamQuestion;
use App\Models\StudentEvaluation;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use App\Models\Schedule;
use App\Models\User;
use Illuminate\Http\Request;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
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
    $request->validate([
        'student_id' => 'required|exists:users,id',
        'answers' => 'required|array',
    ]);

    $studentId = $request->student_id;

    $latestAttempt = ExamAttempt::where('student_id', $studentId)
        ->orderByDesc('created_at')
        ->first();

    if ($latestAttempt && $latestAttempt->status === 'PASSED') {
        return redirect()
            ->route('instructor.exam.show', $studentId)
            ->with('error', 'You already passed the exam.');
    }

    if ($latestAttempt && $latestAttempt->status === 'FAILED') {
        return redirect()
            ->route('instructor.exam.show', $studentId)
            ->with('error', 'You already failed this attempt. Please pay for a retake.');
    }

    $answers = $request->answers;
    $score = 0;
    $totalPoints = 0;

    foreach ($answers as $questionId => $answer) {
        $question = ExamQuestion::find($questionId);
        if (!$question) continue;

        $totalPoints += $question->points;
        if ($answer === $question->correct_answer) {
            $score += $question->points;
        }
    }

    $percentage = $totalPoints > 0 ? ($score / $totalPoints) * 100 : 0;
    $status = $percentage >= 80 ? 'PASSED' : 'FAILED';

    $attempt = ExamAttempt::create([
        'student_id' => $studentId,
        'score' => $score,
        'status' => $status,
        'attempt_number' => $latestAttempt ? $latestAttempt->attempt_number + 1 : 1,
    ]);
    
        StudentEvaluation::updateOrCreate(
    [
        'student_id' => $studentId,
        'course_type' => 'theoretical',
        'course_registration_id' => $request->course_registration_id ?? null,
    ],
    [
        'scores' => $answers,
        'total_score' => $totalPoints,
        'remark' => $status === 'PASSED' ? 'Passed' : 'Failed',
        'instructor_notes' => $status === 'PASSED'
            ? 'Student passed theoretical exam.'
            : 'Student failed. Retake required.',
    ]
);
    return redirect()
        ->route('instructor.exam.show', $studentId)
        ->with('result', [
            'score' => $score,
            'total' => $totalPoints,
            'percentage' => round($percentage, 2),
            'status' => $status,
        ]);
}


    /**
     * Display the specified resource.
     */
   public function show($studentId)
{
    $student = User::findOrFail($studentId);
$courseRegistration = $student->courseRegistrations()->latest()->first();

    $latestAttempt = ExamAttempt::where('student_id', $studentId)
        ->orderByDesc('created_at')
        ->first();

    $result = session('result');

    if (!$result && $latestAttempt) {
        $totalPoints = ExamQuestion::sum('points'); 
        $percentage = $totalPoints > 0 ? ($latestAttempt->score / $totalPoints) * 100 : 0;

        $result = [
            'score' => $latestAttempt->score,
            'total' => $totalPoints,
            'percentage' => round($percentage, 2),
            'status' => $latestAttempt->status,
        ];
    }
    $questions = $result ? [] : ExamQuestion::inRandomOrder()
        ->limit(10)
        ->get();

    return Inertia::render('Instructor/TheoreticalExam', [
        'student'   => $student,
        'questions' => $questions,
        'result'    => $result,
        'error'     => session('error'),
         'course_registration_id' => $courseRegistration?->id,
    ]);
}



    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
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
