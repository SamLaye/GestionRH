<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class EmployeeController extends Controller
{
    public function index()
    {
        $employes = Employe::all();
        return response()->json($employes);
    }

   public function createEmploye(Request $request)
{
    // Valider les données de la requête
    $validator = Validator::make($request->all(), [
        'firstname' => 'required|string',
        'lastname' => 'required|string',
        'email' => 'required|string',
        'adress' => 'required|string', 
        'departement' => 'required|string',
        'date' => 'required|numeric',
    ]);

    try {
        // Vérifier si la validation a échoué
        if ($validator->fails()) {
            // Retourner une réponse JSON avec les erreurs de validation
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Créer un nouvel employé avec les données validées
        $employe = Employe::create($validator->validated());
        
        // Retourner une réponse JSON avec un message de succès et les données de l'employé créé
        return response()->json(['message' => 'Employé créé avec succès', 'employe' => $employe], 201);
    } catch (\Exception $e) {
        // En cas d'erreur, renvoyer une réponse JSON avec un message d'erreur approprié et le code d'erreur
        return response()->json(['message' => 'Une erreur est survenue lors de la création de l\'employé', 'error' => $e->getMessage()], 500);
    }
}


    public function show(Employe $employe)
    {
        return response()->json($employe);
    }

    public function update(Request $request, Employe $employe)
    {
        $validatedData = $request->validate([
            // Ici, vous définirez vos règles de validation
        ]);

        $employe->update($validatedData);
        return response()->json(['message' => 'Employé mis à jour avec succès.', 'employe' => $employe]);
    }

    public function destroy(Employe $employe)
    {
        $employe->delete();
        return response()->json(['message' => 'Employé supprimé avec succès.']);
    }
}
<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();
        return response()->json($employees);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            // Ici, vous définirez vos règles de validation
        ]);

        $employee = Employee::create($validatedData);
        return response()->json(['message' => 'Employee created successfully.', 'employee' => $employee], 201);
    }

    public function show(Employee $employee)
    {
        return response()->json($employee);
    }

    public function update(Request $request, Employee $employee)
    {
        $validatedData = $request->validate([
            // Ici, vous définirez vos règles de validation
        ]);

        $employee->update($validatedData);
        return response()->json(['message' => 'Employee updated successfully.', 'employee' => $employee]);
    }

    public function destroy(Employee $employee)
    {
        $employee->delete();
        return response()->json(['message' => 'Employee deleted successfully.']);
    }
}
