<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreManageMaterialRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'type' => 'required|in:pdf,video',
            'link' => 'required_if:type,video|nullable|string',
            'file' => 'required_if:type,pdf|nullable|file|mimes:pdf|max:10240',
        ];
    }
}
