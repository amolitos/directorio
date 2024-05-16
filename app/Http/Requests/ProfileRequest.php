<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
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
            'school' => 'required|string|max:250',
            'degree_id' => 'required|exists:degrees,id',
            'professional_id' => 'nullable|string|max:50',
            'office' => 'nullable|string|max:250',
            'street' => 'nullable|string|max:100',
            'suburb' => 'nullable|string|max:100',
            'city_id' => 'nullable|exists:cities,id',
            'state_id' => 'required|exists:states,id',
            'whatsapp' => 'nullable|string|max:10',
            'website' => 'nullable|string|max:255',
            'linkedin' => 'nullable|string|max:255',
            'facebook' => 'nullable|string|max:255',
            'instagram' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255'
        ];
    }
}
