<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::statement("ALTER TABLE course_registrations MODIFY course_status ENUM('available', 'completed', 'not_started') DEFAULT 'available'");
    }

    public function down(): void
    {
        DB::statement("ALTER TABLE course_registrations MODIFY course_status ENUM('available', 'completed') DEFAULT 'available'");
    }
};
