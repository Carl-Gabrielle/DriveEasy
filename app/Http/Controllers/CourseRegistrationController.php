<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class CourseRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
public function index()
{
    $user = Auth::user();
    $studentApplication = $user->studentApplication;

    $courseStatus = [
        'Theoretical' => 'available',
        'Practical' => 'available',
    ];

    if ($studentApplication) {
        foreach ($studentApplication->courseRegistrations as $registration) {
            $courseStatus[$registration->course_type] = $registration->course_status ?? 'not_started';
        }
    }

    return Inertia::render('Student/CourseRegistration', [
        'applicationStatus' => $studentApplication?->status,
        'courseStatus' => $courseStatus,
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
    $request->validate([
        'course_type' => 'required|in:Theoretical,Practical',
    ]);

    $user = Auth::user();
    $studentApplication = $user->studentApplication;

    if (!$studentApplication || $studentApplication->status !== 'approved') {
        return redirect()->back()->with('error', 'Your application is not approved.');
    }

    $existing = $studentApplication->courseRegistrations()
        ->where('course_type', $request->course_type)
        ->first();

    if ($existing) {
        return redirect()->back()->with('error', 'You have already registered for this course.');
    }

    // Save course registration
    $studentApplication->courseRegistrations()->create([
        'course_type' => $request->course_type,
        'course_status' => 'not_started',
        'admin_remarks' => null,
    ]);

    return redirect()->route('course-registration.index')->with('success', 'Course registration submitted successfully.');
}


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
