<?php

namespace App\Http\Controllers;
use App\Models\LearningMaterial;
use Inertia\Inertia;

use Illuminate\Http\Request;

class StudentLearningMaterialController extends Controller
{
  public function index()
    {
        $materials = LearningMaterial::latest()->get(); 
        return Inertia::render('Student/LearningMaterials', [
            'materials' => $materials,
            'success' => session('success'),
        ]);
    }
}
