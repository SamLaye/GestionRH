<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;
    protected $table = 'employees';
    public $timestamps = false;

    protected $fillable = [
        'firstName', 'lastName', 'email', 
        'hireDate', 'gender', 
        'phoneNumber', 'address', 'birthDate', 
        'employee_id', 'department', 'position',
    ];

     // Relation avec les congés
     public function leaves()
     {
         return $this->hasMany(Leave::class);
     }
 
     // Vous pouvez ajouter d'autres méthodes pour vérifier si un utilisateur est administrateur.
     public function isAdmin()
     {
         return $this->is_admin; // suppose que vous avez une colonne `is_admin` dans votre table users
     }
}
