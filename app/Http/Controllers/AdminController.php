<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;

class AdminController extends Controller
{
    public function index()
{
    if (Auth::user()->role === 'admin') {

        return Inertia::render('Admin/Dashboard', [
            'users' => User::all(),
        ]);
    }

    return redirect('/login')->with('error', 'You do not have access to this page.');
}
}
