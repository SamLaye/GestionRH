<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Leave extends Model
{
    use HasFactory;

    
    protected $fillable = [
        'employee_id',
        'reason',
        'start_date',
        'end_date',
        'status',
        'approved_by_id',
    ];
    public $timestamps = false;


    // Relation avec l'employé demandeur du congé
    public function employee()
    {
        return $this->belongsTo(Employee::class, 'employee_id');
    }

    // Relation avec l'employé ayant approuvé le congé
    public function approvedBy()
    {
        return $this->belongsTo(Employee::class, 'approved_by_id');
    }
}
