<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\StudentApplication;
use App\Http\Requests\StoreStudentApplicationRequest;

class ApplicationController extends Controller
{
    public function index()
    {
        $applications = StudentApplication::with('user')
        ->where('user_id', Auth::id())
        ->latest()
        ->get();

        return Inertia::render('Student/Application', [
            'applications' => $applications,
            'success' => session('success'),
        ]);
    }

    public function store(StoreStudentApplicationRequest $request)
{
    $user = Auth::user();
    $validated = $request->validated();

    $data = [
        'birth_certificate' => $validated['birthCertificate']->store('applications/birth_certificates', 'public'),
        'gov_id' => $validated['govId']->store('applications/gov_ids', 'public'),
        'id_picture' => $validated['idPicture']->store('applications/id_pictures', 'public'),
        'marriage_contract' => isset($validated['marriageContract'])
            ? $validated['marriageContract']->store('applications/marriage_contracts', 'public')
            : null,
        'status' => 'pending',
    ];

    $existingApp = StudentApplication::where('user_id', $user->id)->first();

    if ($existingApp) {
        $existingApp->update($data);
        $message = 'Application updated successfully!';
    } else {
        $data['user_id'] = $user->id;
        StudentApplication::create($data);
        $message = 'Application submitted successfully!';
    }

    return redirect()->route('student.applications')->with('success', $message);
}

}
