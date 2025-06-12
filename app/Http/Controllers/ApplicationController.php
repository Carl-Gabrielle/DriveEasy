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

    $existingApp = StudentApplication::where('user_id', $user->id)->first();

    $birthCert = $request->file('birthCertificate')->store('applications/birth_certificates', 'public');
    $govId = $request->file('govId')->store('applications/gov_ids', 'public');
    $idPic = $request->file('idPicture')->store('applications/id_pictures', 'public');
    $marriageContract = $request->hasFile('marriageContract')
        ? $request->file('marriageContract')->store('applications/marriage_contracts', 'public')
        : null;

   if ($existingApp) {
    $existingApp->update([
        'birth_certificate' => $birthCert,
        'gov_id' => $govId,
        'id_picture' => $idPic,
        'marriage_contract' => $marriageContract,
        'status' => 'pending',
    ]);
} else {
    StudentApplication::create([
        'user_id' => $user->id,
        'birth_certificate' => $birthCert,
        'gov_id' => $govId,
        'id_picture' => $idPic,
        'marriage_contract' => $marriageContract,
    ]);
}


    return redirect()->route('student.applications')->with('success', $existingApp ? 'Application updated successfully!' : 'Application submitted successfully!');
}

}
