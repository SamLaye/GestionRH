<?php

namespace Database\Factories;

use App\Models\Employee;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employee>
 */
class EmployeeFactory extends Factory
{
protected $model = Employee::class;
    /**
     * Define the model's default state.
     *
     
     * @return array<string, mixed>
     */
    public function definition(): array
    {
    
        return [
            'firstName' => $this->faker->firstName,
            'lastName' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'hireDate' => $this->faker->date,
            'gender' => $this->faker->randomElement(['male', 'female']),
            'phoneNumber' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'birthDate' => $this->faker->dateTimeBetween('-60 years', '-18 years'),
            'employee_id' => Str::random(10),
            'department' => $this->faker->word,
            'position' => $this->faker->jobTitle,
            'is_admin' => $this->faker->boolean,
        ];
    }
}
