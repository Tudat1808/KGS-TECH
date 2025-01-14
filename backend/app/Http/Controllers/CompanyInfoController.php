<?php

namespace App\Http\Controllers;

use App\Models\CompanyInfo;
use Illuminate\Http\Request;

class CompanyInfoController extends Controller
{
    // Lấy thông tin công ty
    public function index()
    {
        $companyInfo = CompanyInfo::first();  // Lấy bản ghi đầu tiên
        if (!$companyInfo) {
            return response()->json(['message' => 'Company info not found'], 404);
        }

        return response()->json($companyInfo);
    }

    // Cập nhật thông tin công ty
    public function update(Request $request, $id)
    {
        $companyInfo = CompanyInfo::findOrFail($id);
    
        // Xác nhận các trường được phép cập nhật
        $validated = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|email',
            'phone' => 'sometimes|string',
            'address' => 'sometimes|string',
            'description' => 'nullable|string',
            'founded_date' => 'nullable|date',
            'social_links' => 'nullable|array',
        ]);
    
        // Chỉ cập nhật các trường có trong request
        $companyInfo->update($validated);
    
        return response()->json([
            'message' => 'Company info updated successfully',
            'data' => $companyInfo,
        ], 200);
    }
    
}
