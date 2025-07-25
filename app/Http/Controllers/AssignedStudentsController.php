<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Schedule;

class AssignedStudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
public function index()
{
    $instructor = Auth::user();

    $students = Schedule::with([
        'courseRegistration.studentApplication.user',
    ])
    ->where('instructor_id', $instructor->id)
    ->whereHas('courseRegistration.studentApplication.user', function ($query) {
        $query->whereDoesntHave('evaluationsReceived', function ($q) {
            $q->whereColumn('course_type', 'course_registrations.course_type');
        });
    })
    ->get();

    return Inertia::render('Instructor/AssignedStudents', [
        'students' => $students,
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
        //
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
