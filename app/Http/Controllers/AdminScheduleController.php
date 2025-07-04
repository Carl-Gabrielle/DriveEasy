<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Schedule;
use App\Models\CourseRegistration;

class AdminScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
public function index()
{
    $instructors = User::where('role', 'instructor')->get(['id', 'name']);
    $registrations = CourseRegistration::with('studentApplication.user')->get();
    $schedules = Schedule::with(['instructor', 'courseRegistration.studentApplication.user'])
                    ->where('status', 'pending')
                    ->latest()
                    ->get();

    return Inertia::render('Admin/Schedules', [
        'success' => session('success'),
        'instructors' => $instructors,
        'registrations' => $registrations,
        'schedules' => $schedules,
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
        'instructor_id' => 'required|exists:users,id',
        'course_registration_id' => 'required|exists:course_registrations,id',
        'date' => 'required|date',
        'time' => 'required',
        'location' => 'required|string|max:255',
        'description' => 'nullable|string',
    ]);

    Schedule::create($validated);

    return redirect()->route('admin.schedules.index')->with('success', 'Schedule created successfully.');
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
