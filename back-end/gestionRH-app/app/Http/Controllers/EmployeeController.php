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
       // Valider les données de la requête
        $validatedData = $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|string',
             'adress' => 'required|string', 
             'departement' => 'required|string',
            'date' => 'required|date',
        ]);

        $employees = Employee::create($validatedData);
        return response()->json(['message' => 'Employé créé avec succès', 'employees' => $employee], 201);
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
