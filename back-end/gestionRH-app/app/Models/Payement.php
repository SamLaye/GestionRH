<?php

namespace App\Models;

use App\Models\Employe;
use Illuminate\Database\Eloquent\Model;

class Payement extends Model
{
    protected $fillable = [
        'employee_id',
        'mois',
        'du',
        'au',
        'salaire_base',
        'situation_familiale',
        'enfants_a_charge',
        'taux_cimr',
        'taux_assistance_maladie',
        'assurance_retraite_complementaire',
        'interet_credit_logement',
        'retenue_pret',
        // Ajoutez d'autres champs que vous souhaitez remplir
    ];

    public $timestamps = false;
    // Relation avec le modèle Employee
    public function employe()
    {
        return $this->belongsTo(Employe::class);
    }
}
