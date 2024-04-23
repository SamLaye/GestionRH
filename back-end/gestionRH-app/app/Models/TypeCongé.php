<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeCongé extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'type-conges';
    protected $fillable = [
        'name', 'description', 'max_duration'
    ];
}
