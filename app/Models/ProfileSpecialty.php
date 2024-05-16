<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProfileSpecialty extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }
}
