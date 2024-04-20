<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('payements', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employee_id');
            $table->foreign('employee_id');
            $table->string('mois');
            $table->date('du');
            $table->date('au');
            $table->decimal('salaire_base', 8, 2);
             $table->string('situation_familiale')->nullable();
            $table->integer('enfants_charge')->nullable();
            $table->decimal('taux_cimr', 5, 2)->nullable();
            $table->decimal('taux_assistance_maladie', 5, 2)->nullable();
            $table->decimal('assurance_retraite_complementaire', 8, 2)->nullable();
            $table->decimal('interet_credit_logement', 8, 2)->nullable();
            $table->decimal('retenue_pret', 8, 2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payements');
    }
};
