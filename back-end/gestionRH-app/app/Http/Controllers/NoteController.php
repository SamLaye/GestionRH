<?php

namespace App\Http\Controllers;

use App\Models\NoteInterne;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    // ---------------------affichage des note-------------------------------------------
    public function getNotes()
{
    $notes = NoteInterne::all();
    return response()->json($notes);
}
    
    public function store(Request $request)
{
    $validatedData = $request->validate([
        'titre' => 'required|max:255',
        'contenu' => 'required',
        'departement' => 'nullable|string'
    ]);

    $note = NoteInterne::create($validatedData);
    return response()->json($note, 201);
}

}
