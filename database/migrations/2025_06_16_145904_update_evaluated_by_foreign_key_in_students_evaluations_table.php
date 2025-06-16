<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('students_evaluations', function (Blueprint $table) {
            $table->dropColumn('evaluated_by');

            $table->foreignId('evaluated_by')
                ->after('instructor_notes') 
                ->constrained('users')
                ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('students_evaluations', function (Blueprint $table) {
            $table->dropForeign(['evaluated_by']);
            $table->dropColumn('evaluated_by');

            $table->string('evaluated_by')->nullable();
        });
    }
};
