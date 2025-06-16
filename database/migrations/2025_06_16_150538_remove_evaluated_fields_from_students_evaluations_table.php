<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('students_evaluations', function (Blueprint $table) {
            $table->dropForeign(['evaluated_by']);
            
            $table->dropColumn(['evaluated_at', 'evaluated_by']);
        });
    }

    public function down(): void
    {
        Schema::table('students_evaluations', function (Blueprint $table) {
            $table->timestamp('evaluated_at')->useCurrent();
            $table->string('evaluated_by');

        });
    }
};
