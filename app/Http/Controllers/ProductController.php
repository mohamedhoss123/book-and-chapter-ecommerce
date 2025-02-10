<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::paginate(15);
        return Inertia::render('Admin/Products/index', $products);
    }

    public function create()
    {
        return Inertia::render('Admin/Products/create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'price' => 'required',
            'stock' => 'required',
            'image' => 'required|mimes:jpg,png,pdf',

        ]);
        if ($request->hasFile('image')) {

            $data['image'] = Storage::disk('s3')->put('/', $request->file("image"));
        }

        $product = Product::create($data);
        return redirect()->route('admin.product.create', compact('product'));
    }

    public function show(Product $product)
    {
        return view('products.show', compact('product'));
    }

    public function edit(Product $product)
    {
        return view('products.edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return redirect()->route('products.index');
    }

    public function destroy(Product $product)
    {
        $product->delete();
        return redirect()->route('products.index');
    }
}
