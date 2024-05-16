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
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->string('school', 250);
            $table->foreignId('degree_id');
            $table->foreign('degree_id')->references('id')->on('degrees');
            $table->string('professional_id', 50)->nullable();
            $table->string('office', 250)->nullable();
            $table->string('street', 100)->nullable();
            $table->string('suburb', 100)->nullable();
            $table->integer('city_id');
            $table->integer('state_id');
            $table->string('photo', 100)->nullable();
            $table->text('biography')->nullable();
            $table->string('whatsapp', 10)->nullable();
            $table->string('website', 255)->nullable();
            $table->string('linkedin', 255)->nullable();
            $table->string('facebook', 255)->nullable();
            $table->string('instagram', 255)->nullable();
            $table->string('twitter', 255)->nullable();
            $table->timestamps();
            $table->dateTime('verified_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profiles');
    }
};
