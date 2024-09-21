<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Testimony;

class TestimonyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $testimonies = Testimony::all();
        return Inertia::render('Admin/Testimony/Index', [
            'testimonies' => $testimonies,
        ]);
    }

    public function getAllTestimonies()
    {
        $testimonies = Testimony::all();
        return response()->json($testimonies);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Testimony/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'age' => 'required|integer',
            'testimony' => 'required|string',
        ]);

        // Create a new testimony
        $testimony = new Testimony();
        $testimony->name = $request->input('name');
        $testimony->age = $request->input('age');
        $testimony->testimony = $request->input('testimony');
        $testimony->save();

        // Redirect or return a response
        return redirect()->route('testimony.index')->with('success', 'Testimony created successfully.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $testimony = Testimony::findOrFail($id);
        return Inertia::render('Admin/Testimony/Update', [
            'testimony' => $testimony,
        ]);
    }
    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $testimony = Testimony::findOrFail($id);
        $testimony->update($request->all());
        return redirect()->route('testimony.index')->with('success', 'Testimony updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $testimony = Testimony::findOrFail($id);
        $testimony->delete();
        return redirect()->back()->with('success', 'Testimony deleted successfully.');
    }
}
