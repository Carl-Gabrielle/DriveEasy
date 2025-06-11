<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStudentApplicationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
       return [
            'birthCertificate' => 'required|file|mimes:jpg,png,pdf',
            'govId' => 'required|file|mimes:jpg,png,pdf',
            'idPicture' => 'required|file|mimes:jpg,png',
            'marriageContract' => 'nullable|file|mimes:jpg,png,pdf',
        ];
    }
}
