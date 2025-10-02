<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Schedule;

class StudentScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
public function index()
{
    $user = Auth::user();

    $schedules = Schedule::with(['instructor', 'courseRegistration.studentApplication'])
        ->whereHas('courseRegistration.studentApplication', function ($query) use ($user) {
            $query->where('user_id', $user->id);
        })
        ->latest()
        ->get()
        ->map(function ($schedule) {
              $courseType = $schedule->courseRegistration->course_type ?? null;
               $instructor = $schedule->instructor 
            ? [
                'id' => $schedule->instructor->id,
                'name' => $schedule->instructor->name,
            ] 
            : null;
            return [
                'course' => $schedule->courseRegistration->course_type,
                'course_registration' => [
                'id' => $schedule->courseRegistration->id ?? null,
                'course_type' => $courseType,
            ],
                'date' => $schedule->date,
                'time' => $schedule->time,
              'instructor' => $instructor,
                'location' => $schedule->location,
                'description' => $schedule->description,
            ];
        });

    // dd($schedules->toArray());

    return Inertia::render('Student/Schedule', [
        'schedule' => $schedules,
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
