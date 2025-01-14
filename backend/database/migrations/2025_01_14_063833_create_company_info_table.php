<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompanyInfoTable extends Migration
{
    public function up()
    {
        Schema::create('company_info', function (Blueprint $table) {
            $table->id();  // Khóa chính tự động tăng
            $table->string('name');  // Tên công ty
            $table->string('email')->unique();  // Email liên hệ
            $table->string('phone');  // Số điện thoại liên hệ
            $table->string('address');  // Địa chỉ công ty
            $table->text('description')->nullable();  // Mô tả chi tiết
            $table->date('founded_date')->nullable();  // Ngày thành lập công ty
            $table->json('social_links')->nullable();  // Liên kết mạng xã hội (JSON chứa các link)
            $table->timestamps();  // Thời gian tạo và cập nhật bản ghi
        });
    }

    public function down()
    {
        Schema::dropIfExists('company_info');  // Xóa bảng khi rollback migration
    }
}
