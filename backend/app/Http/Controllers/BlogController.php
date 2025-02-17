<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;

class BlogController extends Controller
{
    // Lấy danh sách tất cả blogs
    public function index()
    {
        $blogs = Blog::all();
        return response()->json($blogs, 200);
    }

    public function show($id)
{
    $blog = Blog::find($id);
    if (!$blog) {
        return response()->json(['message' => 'Blog not found'], 404);
    }
    return response()->json($blog);
}


    // Tạo một blog mới
    public function store(Request $request)
    {
        Log::info('Blog data received:', $request->all());

        $validatedData = $request->validate([
            'title_key' => 'required|max:255',
            'description_key' => 'required',
            'uploaded_by' => 'required|string | max:255',
            'date_upload' => 'nullable|date',
            'date_updated' => 'nullable|date'
        ]);

        try {
            $blog = Blog::create($validatedData);

            Log::info('Blog created successfully:', ['blog_id' => $blog->id]);

            return response()->json([
                'message' => 'Blog created successfully',
                'blog' => $blog
            ], 201);
        } catch (\Exception $e) {
            Log::error('Error in blog creation:', ['error' => $e->getMessage()]);

            return response()->json([
                'message' => 'Failed to create blog',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Cập nhật thông tin một blog
    public function update(Request $request, $id)
    {
        Log::info('Updating blog with ID:', ['id' => $id]);
        Log::info('Update API called with ID: ' . $id);

        $blog = Blog::findOrFail($id);

        $validatedData = $request->validate([
            'title_key' => 'required|max:255',
            'description_key' => 'required',
            'uploaded_by' => 'required|integer',
            'date_upload' => 'required|date',
            'date_updated' => 'required|date'
        ]);

        $blog->update($validatedData);

        Log::info('Blog updated: ' . $blog->id);

        return response()->json(['message' => 'Blog updated successfully', 'blog' => $blog], 200);
    }

    // Xóa một blog
    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);

        $blog->delete();

        Log::info('Blog deleted: ' . $blog->id);

        return response()->json(['message' => 'Blog deleted successfully'], 204);
    }
}
