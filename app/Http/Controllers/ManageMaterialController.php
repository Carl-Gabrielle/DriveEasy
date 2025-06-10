<?php

namespace App\Http\Controllers;

use App\Models\LearningMaterial;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;
use App\Http\Requests\StoreManageMaterialRequest;
use App\Http\Requests\UpdateManageMaterialRequest;

class ManageMaterialController extends Controller
{
    /**
     * Display all learning materials in one page.
     */
    public function index()
    {
        $materials = LearningMaterial::latest()->get(); 


        return Inertia::render('Admin/ManageMaterials', [
            'materials' => $materials,
            'success' => session('success'),
        ]);
    }

    /**
     * Store a new material.
     */
    public function store(StoreManageMaterialRequest $request)
    {
        $data = $request->validated();

        if ($data['type'] === 'pdf' && isset($data['file'])) {
            $file = $data['file'];
            $path = $file->store('materials/' . Str::random(), 'public');
            $data['link'] = '/storage/' . $path;
        }

        LearningMaterial::create($data);

         return to_route('admin.materials.index')
            ->with('success', 'Material created successfully.');
    }

    /**
     * Update an existing material.
     */
    public function update(UpdateManageMaterialRequest $request, LearningMaterial $material)
    {
        $data = $request->validated();

        if ($data['type'] === 'pdf' && isset($data['file'])) {
            if ($material->type === 'pdf' && $material->link) {
                $oldPath = str_replace('/storage/', '', $material->link);
                Storage::disk('public')->deleteDirectory(dirname($oldPath));
            }

            $file = $data['file'];
            $path = $file->store('materials/' . Str::random(), 'public');
            $data['link'] = '/storage/' . $path;
        }

        $material->update($data);

        return redirect()->route('admin.materials.index')->with('success', 'Material updated successfully.');
    }

    /**
     * Delete a material.
     */
    public function destroy(LearningMaterial $material)
    {
        if ($material->type === 'pdf' && $material->link) {
            $path = str_replace('/storage/', '', $material->link);
            Storage::disk('public')->deleteDirectory(dirname($path));
        }

        $material->delete();

        return redirect()->route('admin.materials.index')->with('success', 'Material deleted.');
    }
}
