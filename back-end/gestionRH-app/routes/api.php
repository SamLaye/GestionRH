<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeaveController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\PayementController;
use App\Http\Controllers\LeaveTypeController;
use App\Http\Controllers\NoteController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);    
});
//+++++++++++++++++++++++++Type de conges+++++++++++++++++++++++++++++++++++++++++++++
Route::get('/leave-types', [LeaveTypeController::class, 'index']);
Route::post('/leave-types', [LeaveTypeController::class, 'store']);

// ++++++++++++++++++++++++++++++++++conges accorder+++++++++++++++++++++++++++++++++++++
Route::get('/leaves/create', [LeaveController::class, 'create']);
Route::post('/leaves', [LeaveController::class, 'store']);
Route::get('/leaves', [LeaveController::class, 'index']);
Route::get('/leaves/pending', [LeaveController::class, 'getPendingLeaves']);
Route::get('/leaves/approved', [LeaveController::class, 'getApprovesLeaves']);
Route::get('/leaves/allLeaves', [LeaveController::class, 'getAllLeaves']);
Route::post('/leaves/approve/{id}', [LeaveController::class, 'approveLeave']);


//+++++++++++++++++++++++++++++employee+++++++++++++++++++++++++++++++++++++++++++

Route::get('/employes', [EmployeeController::class, 'index']);
Route::get('/employees/create', [EmployeeController::class, 'create']);
Route::post('/employes', [EmployeeController::class, 'store']);
Route::get('/employes/{employe}/payments', [EmployeeController::class, 'getEmployeePayments']);
Route::post('employes', [EmployeeController::class, 'createEmploye']);
Route::get('/employees/{employee}', [EmployeeController::class, 'show']);
Route::get('/employees/{employee}/edit', [EmployeeController::class, 'edit']);
Route::put('/employees/{employee}', [EmployeeController::class, 'update']);
Route::delete('/employees/{employee}', [EmployeeController::class, 'destroy']);

//+++++++++++++++++++++++++++++payement+++++++++++++++++++++++++++++++++++++++++++

Route::get('/payements', [PayementController::class, 'index']);
Route::get('/payements/create', [PayementController::class, 'create']);
Route::post('payements', [PayementController::class, 'createPayement']);


//++++++++++++++++++++++NOTES INTERNES+++++++++++++++++++++++++++++++++++++++++++++++++++++


Route::get('/notes', [NoteController::class, 'getNotes']);
Route::post('/notes', [NoteController::class,'store'] );