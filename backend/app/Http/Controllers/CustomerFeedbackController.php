<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CustomerFeedback;

class CustomerFeedbackController extends Controller
{
    public function index()
    {
        $feedbacks = CustomerFeedback::all();
        return response()->json($feedbacks);
    }
    
    public function show($id)
    {
        $feedback = CustomerFeedback::find($id);
        return response()->json($feedback);
    }
    
    public function store(Request $request)
    {
        $feedback = CustomerFeedback::create($request->all());
        return response()->json($feedback, 201);
    }
    
    public function update(Request $request, $id)
    {
        $feedback = CustomerFeedback::findOrFail($id);
        $feedback->update($request->all());
        return response()->json($feedback);
    }
    
    public function destroy($id)
    {
        CustomerFeedback::findOrFail($id)->delete();
        return response()->json('Deleted successfully', 204);
    }    
}
