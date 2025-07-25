<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up()
{
    Schema::create('learning_materials', function (Blueprint $table) {
        $table->id();
        $table->string('title');
        $table->text('link'); 
        $table->enum('type', ['pdf', 'video']);
        $table->boolean('is_active')->default(true); 
        $table->timestamps();
    });
}


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('learning_materials');
    }
};
