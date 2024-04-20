<?php

namespace Database\Factories;

use App\Models\Leave;
use App\Models\Employee;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Leave>
 */
class LeaveFactory extends Factory
{
    protected $model = Leave::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'employee_id' => Employee::inRandomOrder()->first()->id, // Sélectionne un employé au hasard
            'reason' => $this->faker->sentence,
            'start_date' => $startDate = $this->faker->date(),
            'end_date' => $this->faker->date('Y-m-d', $startDate), // Assure que end_date est après start_date
            'status' => $this->faker->randomElement(['en attente', 'approuvé', 'rejeté']),
            'approved_by_id' => function (array $leave) {
                return $leave['status'] === 'apprové' ? Employee::where('is_admin', true)->inRandomOrder()->first()->id : null;
            },
        ];
    }
}
