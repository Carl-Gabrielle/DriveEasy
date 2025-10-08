<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('course_registrations', function (Blueprint $table) {
            $table->id();

            $table->foreignId('student_application_id')->constrained()->onDelete('cascade');

            $table->enum('course_type', ['Theoretical', 'Practical']);
            $table->enum('registration_status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->enum('course_status', ['available', 'completed', 'not_started'])->default('available');
            $table->text('admin_remarks')->nullable();

            $table->timestamps();
 
            $table->unique(['student_application_id', 'course_type']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('course_registrations');
    }
};
