<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::all();
        return response()->json(['blogs' => $blogs]);
    }

    public function create()
    {
        return view('blogs.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title_key' => 'required|max:255',
            'description_key' => 'required',
        ]);
    
        Blog::create($validatedData);
        return response()->json(['message' => 'Blog created successfully', 'blog' => $validatedData]);
    }
    public function update(Request $request, $id)
    {
        // Tìm blog từ cơ sở dữ liệu
        $blog = Blog::findOrFail($id);
    
        // Validate dữ liệu nhận được từ request
        $validatedData = $request->validate([
            'title_key' => 'required|max:255',
            'description_key' => 'nullable',
            'uploaded_by' => 'required|integer',
        ]);
    
        // Điền dữ liệu vào blog
        $blog->fill($validatedData);
    
        // Kiểm tra xem có thay đổi nào trong đối tượng không
        if ($blog->isDirty()) {
            $blog->save(); // Lưu các thay đổi vào cơ sở dữ liệu
            $blog->refresh(); // Refresh đối tượng để lấy dữ liệu mới nhất từ cơ sở dữ liệu
            return response()->json(['message' => 'Blog updated successfully', 'blog' => $blog]);
        } else {
            // Không có thay đổi nào được phát hiện
            return response()->json([
                'message' => 'No changes detected',
                'blog' => $blog,
                'received_data' => $request->all(),
                'validatedData' => $validatedData
            ]);
        }
    }
    
    

    public function destroy(Blog $blog)
    {
        try {
            $blog->delete();
            return response()->json(['message' => 'Blog deleted successfully']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error deleting blog']);
        }
    }
}
