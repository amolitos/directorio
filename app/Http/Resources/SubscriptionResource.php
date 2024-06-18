<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SubscriptionResource extends JsonResource
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
            'user' => $this->user,
            'phone' => $this->phone,
            'email' => $this->email,
            'professional_id' => $this->profile->professional_id,
            'plan' => $this->plan,
            'verified' => $this->profile->verified_at ? true : false,
            'subscribed_at' => $this->created_at->translatedFormat('j F Y \a \l\a\s H:i'),
        ];
    }
}
