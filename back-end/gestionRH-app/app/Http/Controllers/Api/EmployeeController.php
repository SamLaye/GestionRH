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
