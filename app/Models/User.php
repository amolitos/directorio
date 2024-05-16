<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;

class User extends Authenticatable
{
    use Billable, HasApiTokens, HasFactory, HasRoles, HasSlug, Notifiable;

    protected $guarded = ['id'];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function getSlugOptions() : SlugOptions
    {
        return SlugOptions::create()->generateSlugsFrom('name')->saveSlugsTo('slug');
    }

    public function profile(): HasOne
    {
        return $this->hasOne(Profile::class);
    }

    public function hasProfile(): bool
    {
        return $this->profile()->exists();
    }

    public function phone()
    {
        return '(' . substr($this->phone, 0, 3) . ') ' .substr($this->phone, 3, 3) . ' ' . substr($this->phone, 6);
    }
}
