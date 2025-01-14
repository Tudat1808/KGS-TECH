<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();  // Khóa chính
            $table->string('title');  // Tiêu đề bài viết
            $table->string('slug')->unique();  // Slug URL thân thiện
            $table->longText('content');  // Nội dung chi tiết bài viết
            $table->string('thumbnail')->nullable();  // Ảnh đại diện bài viết
            $table->unsignedBigInteger('author_id');  // Khóa ngoại tham chiếu đến bảng users
            $table->boolean('is_published')->default(false);  // Trạng thái xuất bản
            $table->timestamp('published_at')->nullable();  // Ngày xuất bản
            $table->timestamps();  // Thời gian tạo và cập nhật

            // Thiết lập khóa ngoại
            $table->foreign('author_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('blogs');  // Xóa bảng khi rollback migration
    }
}
