<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    
    public function index()
    {
        $portfolios = Portfolio::all();
        return Inertia::render('Admin/Portfolio/Index', [
            'portfolios' => $portfolios,
        ]);
    }

    public function getAllPortfolios()
    {
        $portfolios = Portfolio::all();
        return response()->json($portfolios);
    }

    public function create()
    {
        return Inertia::render('Admin/Portfolio/Create');
   
    }

    public function store(Request $request)
    {
        $request->validate([
        'name' => 'required|string|max:255',
        'desc' => 'required|string|max:255',
        'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $file = $request->file('image');
        $filename = $file->getClientOriginalName();
        $file->move(public_path('images'), $filename);
        $portfolio = new Portfolio([
            'name' => $request->name,
            'desc' => $request->desc,
            'image' => $filename ?? null,  
        ]);
        $portfolio->save();
        return redirect()->route('portfolio.index')->with('success', 'Portfolio created successfully.');

    }

    public function edit($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        return Inertia::render('Admin/Portfolio/Update', [
            'portfolio' => $portfolio,
        ]);
    }

    public function update(Request $request, $id)
    {
        $portfolio = Portfolio::findOrFail($id);
        $request->validate([
            'name' => 'required|string|max:255',
            'desc' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if ($request->hasFile('image')) {
            // Delete the old image if exists
            if ($portfolio->image) {
                $oldImagePath = public_path('images') . '/' . $portfolio->image;
                if (file_exists($oldImagePath)) {
                    unlink($oldImagePath);
                }
            }
    
            // Upload the new image
            $imageName = time() . '.' . $request->image->extension(); 
            $request->image->move(public_path('images'), $imageName);
            $portfolio->image = $imageName;
        }
        $portfolio->update([
            'name' => $request->name,
            'desc' => $request->name,
            'image' => $portfolio->image,
        ]);

        return redirect()->route('portfolio.index')->with('success', 'Portfolio updated successfully.');
    }

    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        $portfolio->delete();
        return redirect()->back()->with('success', 'Portfolio deleted successfully.');
    }

}
