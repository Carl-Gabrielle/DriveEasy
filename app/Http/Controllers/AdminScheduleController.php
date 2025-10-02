<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreScheduleRequest;
use App\Http\Resources\CourseRegistrationResource;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Schedule;
use App\Models\CourseRegistration;
use Carbon\Carbon;

class AdminScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    
public function index()
{
    $instructors = User::where('role', 'instructor')
    ->select('id', 'name')
    ->get();
    $registrations = CourseRegistration::with('studentApplication.user')->get();

    $schedules = Schedule::with([
    'instructor:id,name',
    'courseRegistration.evaluations' => function ($q) {
        // $q->whereNotNull('remark');   
        $q->select('id', 'course_registration_id', 'course_type', 'total_score', 'remark', 'instructor_notes');
    },
     'courseRegistration.studentApplication' => function ($q) {
        $q->select('id', 'user_id') 
          ->with([
              'user:id,name'
          ]);
    },
])
->latest()
->get();

    $schedules->each(function ($schedule) {
        $schedule->students = collect([$schedule->courseRegistration->studentApplication->user]);
    });

    // dd($schedules->toArray());

    return Inertia::render('Admin/Schedules', [
        'instructors' => $instructors,
          'registrations' => CourseRegistrationResource::collection($registrations)->resolve(),
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
public function store(StoreScheduleRequest $request)
{
    $validated =$request->validated();

    $dateTime = Carbon::parse($validated['date'].' '.$validated['time'], 'Asia/Manila');

    $validated['time'] = $dateTime->format('H:i:s'); 

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
