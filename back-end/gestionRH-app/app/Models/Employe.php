<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    use HasFactory;

    protected $table = 'employes';

    protected $fillable = [
        'firstname', 
        'lastname',
        'email', 
        'date',
        'adress',
        'departement',
    ];

        public $timestamps = false; // Désactiver la gestion automatique des horodatages

}
