<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('schedules', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->string('time');
            $table->foreignId('instructor_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('course_registration_id')->nullable()->constrained()->onDelete('cascade'); 
            $table->string('location');
            $table->enum('status', ['pending', 'confirmed'])->default('pending');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('schedules');
    }
};
