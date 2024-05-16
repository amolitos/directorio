<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LawyerSearchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->user->name,
            'photo' => $this->photo,
            'state' => $this->state->name,
            'city' => $this->city->name,
            'verified_at' => $this->verified_at,
            'degree' => $this->degree->name,
        ];
    }
}
