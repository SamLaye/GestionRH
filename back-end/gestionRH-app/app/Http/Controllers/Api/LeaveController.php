<?php

namespace App\Http\Controllers;

use App\Models\Leave;
use Illuminate\Http\Request;

class LeaveController extends Controller
{
    /**
     * Affiche la liste de tous les congés.
     *
  * @return \Illuminate\Http\JsonResponse
 */
public function index()
{
    $leaves = Leave::all();
    return response()->json(['leaves' => $leaves]);
}

    /**
     * Affiche le formulaire de création d'un nouveau congé.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('leaves.create');
    }
    //recuperation des conges en attente
    public function getPendingLeaves()
    {
        $pendingLeaves = Leave::with('employee')
                              ->where('status', 'Pending')
                              ->get();
    
        return response()->json($pendingLeaves);
    }
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // recuperation des conges approuves
    public function getApprovesLeaves()
    {
        $ApprovedLeaves = Leave::with('employee')
                              ->where('status', 'approved')
                              ->get();
    
        return response()->json($ApprovedLeaves);
    }
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //recuperation de tous les conges
    public function getAllLeaves()
{
    $allLeaves = Leave::with('employee')->get();
    return response()->json($allLeaves);
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// aprouver les conges en attendes
public function approveLeave($id)
{
    $leave = Leave::findOrFail($id);
    $leave->status = 'Approved';
    $leave->save();

    return response()->json(['message' => 'Leave approved successfully']);
}
    /**
     * Enregistre un nouveau congé dans la base de données.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validation des données du formulaire
        $validatedData = $request->validate([
            'employee_id' => 'required|exists:employees,id',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'reason' => 'required|string',
            'status' => 'required|string',
            'approved_by_id' => 'nullable|exists:employees,id',
        ]);
    
        // Création du congé
        $leave = Leave::create($validatedData);
    
        if ($leave) {
            // Si oui, renvoyez une réponse JSON avec le congé créé et un message de succès
            return response()->json([
                'leave' => $leave,
                'message' => 'Congé créé avec succès.'
            ], 201); // 201 = Created
        } else {
            // Sinon, renvoyez une réponse JSON avec un message d'erreur
            return response()->json([
                'message' => 'Échec de la création du congé.'
            ], 500); // 500 = Internal Server Error
    }
    
    // Autres méthodes pour afficher, mettre à jour, supprimer les congés...

}
}
