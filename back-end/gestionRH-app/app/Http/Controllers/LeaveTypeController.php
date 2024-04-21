<?php

namespace App\Http\Controllers;

use App\Models\TypeCongé;
use Illuminate\Http\Request;

class LeaveTypeController extends Controller
{
    public function index()
    {
        $leaveTypes = TypeCongé::all();
        return response()->json($leaveTypes);
    }
    
    public function store(Request $request)
    {
        // Validez les données de la demande
        $validatedData = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'max_duration' => 'nullable|integer',
        ]);
        if($validatedData){
             // Créez un nouveau type de congé
        $leaveType = TypeCongé::create($validatedData);

        return response()->json($leaveType, 201);
        }else{
            return response()->json([
                'message' => 'Échec de la création du type congé.'
            ], 500);
        }
    }
}
