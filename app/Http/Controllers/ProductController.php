<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Admin/Product/Index', [
            'products' => $products,
        ]);
    }

    public function getAllProducts()
    {
        $products = Product::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Product/Create');
   
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
        'price' => 'required|integer',
        'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // validate each file in the images array
        ]);

        $imageFilenames = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $filename = $file->getClientOriginalName();
                $file->move(public_path('images'), $filename);
                $imageFilenames[] = $filename;
            }
        }

        // Create the product
        $product = new Product([
            'name' => $request->name,
            'price' => $request->price,
            'images' => json_encode($imageFilenames), // Store the array of filenames as a JSON string
        ]);

        $product->save();

        return redirect()->route('product.index')->with('success', 'Product created successfully.');


        // $file = $request->file('image');
        // $filename = $file->getClientOriginalName();
        // $file->move(public_path('images'), $filename);
        // // Create the product
        // $product = new Product([
        //     'name' => $request->name,
        //     'price' => $request->price,
        //     'image' => $filename ?? null,  
        // ]);
        // $product->save();
        // return redirect()->route('product.index')->with('success', 'Product created successfully.');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::findOrFail($id);

        return Inertia::render('ProductDetail', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('Admin/Product/Update', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    // public function update(Request $request, $id)
    // {
    //     $product = Product::findOrFail($id);
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'price' => 'required|integer',
    //         'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Validate each image
    //     ]);

    //     $imagesArray = $product->images ? json_decode($product->images, true) : [];

    //     if ($request->hasFile('images')) {
    //         // Delete old images
    //         foreach ($imagesArray as $oldImage) {
    //             $oldImagePath = public_path('images') . '/' . $oldImage;
    //             if (file_exists($oldImagePath)) {
    //                 unlink($oldImagePath);
    //             }
    //         }

    //         // Upload new images
    //         $newImages = [];
    //         foreach ($request->file('images') as $file) {
    //             $imageName = time() . '_' . uniqid() . '.' . $file->extension(); 
    //             $file->move(public_path('images'), $imageName);
    //             $newImages[] = $imageName;
    //         }

    //         // Merge old images with new ones
    //         $imagesArray = array_merge($imagesArray, $newImages);
    //     }

    //     // Update the product
    //     $product->update([
    //         'name' => $request->name,
    //         'price' => $request->price,
    //         'images' => json_encode($imagesArray), // Store images as JSON
    //     ]);

    //     return redirect()->route('product.index')->with('success', 'Product updated successfully.');

    //     // if ($request->hasFile('image')) {
    //     //     // Delete the old image if exists
    //     //     if ($product->image) {
    //     //         $oldImagePath = public_path('images') . '/' . $product->image;
    //     //         if (file_exists($oldImagePath)) {
    //     //             unlink($oldImagePath);
    //     //         }
    //     //     }
    
    //     //     // Upload the new image
    //     //     $imageName = time() . '.' . $request->image->extension(); 
    //     //     $request->image->move(public_path('images'), $imageName);
    //     //     $product->image = $imageName;
    //     // }// Update the product
    //     // $product->update([
    //     //     'name' => $request->name,
    //     //     'price' => $request->price,
    //     //     // Only update the image if a new one was uploaded
    //     //     'image' => $product->image,
    //     // ]);

    //     // return redirect()->route('product.index')->with('success', 'Product updated successfully.');
    // }
    public function update(Request $request, $id){
    $product = Product::findOrFail($id);
    
    $request->validate([
        'name' => 'required|string|max:255',
        'price' => 'required|integer',
        'images.*' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
    ]);

    if ($request->hasFile('images')) {
        // Delete old images if exist
        foreach (json_decode($product->images) as $image) {
            $oldImagePath = public_path('images') . '/' . $image;
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }
        }

        // Upload new images
        $newImages = [];
        foreach ($request->file('images') as $image) {
            $imageName = time() . '_' . rand(1000, 9999) . '.' . $image->extension();
            $image->move(public_path('images'), $imageName);
            $newImages[] = $imageName;
        }

        // Update product images
        $product->update([
            'images' => json_encode($newImages),
        ]);
    }

    // Update product details
    $product->update([
        'name' => $request->name,
        'price' => $request->price,
    ]);

    return redirect()->route('product.index')->with('success', 'Product updated successfully.');
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
        return redirect()->back()->with('success', 'Product deleted successfully.');
    }
}
