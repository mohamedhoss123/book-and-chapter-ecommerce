<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $products = [];
        $query = $request->input("q");
        if ($query) {
            $products = Product::where("name", "like", "%$query%")->paginate(15);
        } else {
            $products = Product::paginate(15);
        }
        return Inertia::render('Admin/Products/index', ["products" => $products]);
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
        return redirect()->route('admin.product.show', $product->id);
    }

    public function show(int $product)
    {
        $product = Product::where('id', $product)->first();
        if (!$product) {
            return abort(404);
        }
        return Inertia::render('Admin/Products/show', compact('product'));
    }

    public function edit(int $product)
    {
        $product = Product::where('id', $product)->first();
        return Inertia::render('Admin/Products/edit', compact('product'));
    }

    public function update(Request $request, Product $product)
    {
        $product->update($request->all());
        return redirect()->route('admin.product.index');
    }

    public function destroy(int $product)
    {
        Product::destroy($product);
        return redirect()->route('admin.product.index');
    }
}
