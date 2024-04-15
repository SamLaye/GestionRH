<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Payement; // Assurez-vous d'importer le modèle Paiement

class PayementController extends Controller
{
    /**
     * Stocker un nouveau paiement dans la base de données.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        // Valider les données de la requête
        $validatedData = $request->validate([
        'employee_id' => 'required', 
        'mois' => 'required',
        'du' => 'required|date',
        'au' => 'required|date',
        'date_embauche' => 'required|date',
        'salaire_base' => 'required|numeric',
        'situation_familiale' => 'required',
        'enfants_charge' => 'required|numeric',
        'taux_cimr' => 'required|numeric',
        'taux_assistance_maladie' => 'required|numeric',
        'assurance_retraite_complementaire' => 'required|numeric',
        'interet_credit_logement' => 'required|numeric',
        'retenue_pret' => 'required|numeric',
    ]);

    // Créer un nouvel objet Paiement avec les données validées
    $paiement = new Paiement();
    $paiement->employee_id = $validatedData['employee_id'];
    $paiement->mois = $validatedData['mois'];
    $paiement->du = $validatedData['du'];
    $paiement->au = $validatedData['au'];
    $paiement->date_embauche = $validatedData['date_embauche'];
    $paiement->salaire_base = $validatedData['salaire_base'];
    $paiement->situation_familiale = $validatedData['situation_familiale'];
    $paiement->enfants_charge = $validatedData['enfants_charge'];
    $paiement->taux_cimr = $validatedData['taux_cimr'];
    $paiement->taux_assistance_maladie = $validatedData['taux_assistance_maladie'];
    $paiement->assurance_retraite_complementaire = $validatedData['assurance_retraite_complementaire'];
    $paiement->interet_credit_logement = $validatedData['interet_credit_logement'];
    $paiement->retenue_pret = $validatedData['retenue_pret'];

        // Affectez d'autres valeurs de paiement en fonction de votre logique métier

        // Enregistrez le paiement dans la base de données
        $payement->save();

        // Retournez une réponse JSON pour indiquer que le paiement a été enregistré avec succès
        return response()->json(['message' => 'Paiement enregistré avec succès'], 201);
    }
}
