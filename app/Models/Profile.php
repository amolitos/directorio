<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;

    protected $guarded = [
        'id',
        'photo'
    ];

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function degree()
    {
        return $this->belongsTo(Degree::class);
    }

    public function services()
    {
        return $this->belongsToMany(
            Service::class,
            'profile_services', 'profile_id', 'service_id'
        );
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function specialties()
    {
        return $this->belongsToMany(
            Specialty::class,
            'profile_specialties', 'profile_id', 'specialty_id'
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function whatsapp()
    {
        return '(' . substr($this->whatsapp, 0, 3) . ') ' .substr($this->whatsapp, 3, 3) . ' ' . substr($this->whatsapp, 6);
    }
}
