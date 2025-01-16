<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    // Get all blogs
    public function index()
    {
        $blogs = Blog::all();
        return response()->json($blogs);
    }

    // Get a specific blog
    public function show($id)
    {
        $blog = Blog::findOrFail($id);
        return response()->json($blog);
    }

    // Create a new blog
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title_key' => 'required|string|max:255',
            'description_key' => 'required',
            'image_url' => 'required|url',
            'date' => 'required|date', // Adding validation for date
        ]);

        $blog = Blog::create($validatedData);
        return response()->json($blog, 201);
    }

    // Update a blog
    public function update(Request $request, $id)
    {
        $blog = Blog::findOrFail($id);

        $validatedData = $request->validate([
            'title_key' => 'sometimes|required|string|max:255',
            'description_key' => 'sometimes|required',
            'image_url' => 'sometimes|required|url',
            'date' => 'sometimes|required|date', // Validate date when updating
        ]);

        $blog->update($validatedData);
        return response()->json($blog);
    }

    // Delete a blog
    public function destroy($id)
    {
        $blog = Blog::findOrFail($id);
        $blog->delete();
        return response()->json(null, 204);
    }
}
