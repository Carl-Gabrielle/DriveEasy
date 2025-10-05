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
    Schema::table('schedules', function (Blueprint $table) {
        $table->enum('exam_status', ['not_started', 'in_progress', 'completed', 'force_started'])
              ->default('not_started')
              ->after('location'); 
    });
}

public function down(): void
{
    Schema::table('schedules', function (Blueprint $table) {
        $table->dropColumn('exam_status');
    });
}

};
