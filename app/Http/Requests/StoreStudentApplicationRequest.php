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
     */
    public function rules(): array
    {
        return [
            'birthCertificate' => 'required|file|mimes:jpg,png,pdf|max:5120', // max 5MB
            'govId' => 'required|file|mimes:jpg,png,pdf|max:5120',
            'idPicture' => 'required|file|mimes:jpg,png|max:5120',
            'marriageContract' => 'nullable|file|mimes:jpg,png,pdf|max:5120',
        ];
    }

    /**
     * Customize validation error messages (optional)
     */
    public function messages(): array
    {
        return [
            'birthCertificate.required' => 'The birth certificate is required.',
            'birthCertificate.mimes' => 'The birth certificate must be a file of type: jpg, png, pdf.',
            'govId.required' => 'The government ID is required.',
            'govId.mimes' => 'The government ID must be a file of type: jpg, png, pdf.',
            'idPicture.required' => 'The ID picture is required.',
            'idPicture.mimes' => 'The ID picture must be a file of type: jpg, png.',
            'marriageContract.mimes' => 'The marriage contract must be a file of type: jpg, png, pdf.',
        ];
    }
}
