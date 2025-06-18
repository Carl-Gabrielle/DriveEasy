<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // Admin User
        User::create([
            'name' => 'Admin User',
            'email' => 'admin@example.com',
            'phone' => '09123456789',
            'role' => 'admin',
            'address' => 'Admin Street',
            'password' => Hash::make('password123123'), 
        ]);

        // Instructor User
        User::create([
            'name' => 'Instructor User',
            'email' => 'instructor@example.com',
            'phone' => '09123456780',
            'role' => 'instructor',
            'address' => 'Instructor Avenue',
            'password' => Hash::make('password123123'),
        ]);

        // Student User
        User::create([
            'name' => 'Student User',
            'email' => 'student@example.com',
            'phone' => '09123456781',
            'role' => 'student',
            'address' => 'Student Lane',
            'password' => Hash::make('password123123'),
        ]);
    }
}
