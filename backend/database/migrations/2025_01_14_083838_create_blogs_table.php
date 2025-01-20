<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title_key');
            $table->text('description_key');
            $table->unsignedBigInteger('uploaded_by');
            $table->dateTime('date_upload');
            $table->dateTime('date_updated')->nullable(); // Đảm bảo cột này tồn tại
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}