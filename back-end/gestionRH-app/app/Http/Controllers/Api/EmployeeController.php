<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        $employees = Employee::all();
        return response()->json($employes);
    }

    public function store(Request $request)
    {
       // Valider les données de la requête
        $validatedData = $request->validate([
            'firstName' => 'required|string',
            'lastName' => 'required|string',
            'email' => 'required|email|unique:employees,email',
             'adress' => 'required|string', 
             'departement' => 'required|string',
            'date' => 'required|date',
        ]);

        $employee = Employee::create($validatedData);
        return response()->json(['message' => 'Employé crée avec success', 'employee' => $employe], 201);
    }

    public function show(Employe $employee)
    {
        return response()->json($employee);
    }

    public function update(Request $request, Employee $employee)
    {
        $validatedData = $request->validate([
            // Ici, vous définirez vos règles de validation
        ]);

        $employee->update($validatedData);
        return response()->json(['message' => 'Employee updated successfully.', 'employee' => $employe]);
    }

    public function destroy(Employe $employe)
    {
        $employe->delete();
        return response()->json(['message' => 'Employee deleted successfully.']);
    }
}
