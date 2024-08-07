<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $hidden = [
        'end',
        'user_id',
        'created_at',
        'updated_at'
    ];
}
