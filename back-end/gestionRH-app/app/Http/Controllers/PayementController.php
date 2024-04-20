<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payement; // Assurez-vous d'importer le modèle Paiement
use Illuminate\Support\Facades\Validator; // Ajoutez l'importation du Validator

class PayementController extends Controller
{
    public function index()
    {
        $payements = Payement::all();
        return response()->json($payements);
    }
    /**
     * Stocker un nouveau paiement dans la base de données.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */

 public function getEmployeePayements(Employe $employe)
    {
        try {
            // Récupérer les paiements associés à cet employé
            $payements = $employe->payements;

            // Retourner une réponse JSON avec les paiements associés à l'employé
            return response()->json(['payements' => $payements]);
        } catch (\Exception $e) {
            // En cas d'erreur, renvoyer une réponse JSON avec un message d'erreur approprié et le code d'erreur
            return response()->json(['message' => 'Une erreur est survenue lors de la récupération des paiements de l\'employé', 'error' => $e->getMessage()], 500);
        }
    }

   public function createPayement(Request $request)
    {
        // Valider les données de la requête
        $validator = Validator::make($request->all(),[
        'employee_id' => 'required|exists:employes,id', // Assurez-vous que l'employé avec cet ID existe
        'mois' => 'required|string',
        'du' => 'required|numeric',
        'au' => 'required|numeric',
        'date_embauche' => 'required|numeric',
        'salaire_base' => 'required|numeric',
        'situation_familiale' => 'required',
        'enfants_charge' => 'required|numeric',
        'taux_cimr' => 'required|numeric',
        'taux_assistance_maladie' => 'required|numeric',
        'assurance_retraite_complementaire' => 'required|numeric',
        'interet_credit_logement' => 'required|numeric',
        'retenue_pret' => 'required|numeric',
    ]);

    try {
        // Vérifier si la validation a échoué
        if ($validator->fails()) {
            // Retourner une réponse JSON avec les erreurs de validation
            return response()->json(['errors' => $validator->errors()], 422);
        }

         // Vérifier si l'employé avec cet ID existe
            $employeeExists = Employe::where('id', $request->employee_id)->exists();
            if (!$employeeExists) {
                // Retourner une réponse JSON avec un message indiquant que l'employé n'existe pas
                return response()->json(['message' => 'Pas employé'], 404);
            }

        // Créer un nouveau paiement avec les données validées
        $payement = Payement::create($validator->validated());
        
        // Retourner une réponse JSON avec un message de succès et les données du paiement créé
        return response()->json(['message' => 'Paiement enregistré avec succès', 'payement' => $payement], 201);
    } catch (\Exception $e) {
        // En cas d'erreur, renvoyer une réponse JSON avec un message d'erreur approprié et le code d'erreur
        return response()->json(['message' => 'Une erreur est survenue lors de la création du paiement', 'error' => $e->getMessage()], 500);
    }
    }
}
