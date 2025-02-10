import { Input } from '@/components/ui/input'
import AdminLayout from '@/Layouts/Admin.Layout'
import { Label } from "@/components/ui/label"
import React, { use } from 'react'
import { Button } from '@/components/ui/button'
import { router, useForm } from '@inertiajs/react'
export default function edit({ product }) {
    const { data, setData, post } = useForm({ name: '', description: '', price: 0, stock: 0, image: null });
    React.useEffect(() => {
        setData({
            name: product.name,
            description: product.description,
            price: product.price,
            stock: product.stock,
            image: null,
        });
    }, [product]);
    function handleChange(e) {
        setData(e.target.name, e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        post(route('admin.product.store'));
    }

    return (
        <AdminLayout>
            <div className='m-7 w-full flex flex-col items-center'>
                <h1>update product id {product.id}</h1>
                <form onSubmit={handleSubmit} className='w-[50%]'>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" id="name" name="name" placeholder="Name" value={data.name} onChange={handleChange} />

                    <Label htmlFor="description">Description</Label>
                    <Input type="text" id="description" name="description" placeholder="Description" value={data.description} onChange={handleChange} />

                    <Label htmlFor="price">Price</Label>
                    <Input type="number" id="price" name="price" placeholder="Price" value={data.price} onChange={handleChange} />

                    <Label htmlFor="stock">Stock</Label>
                    <Input type="number" id="stock" name="stock" placeholder="Stock" value={data.stock} onChange={handleChange} />

                    <Label htmlFor="image">Image</Label>
                    <Input type="file" id="image" name="image" placeholder="Image" onChange={(e) => setData('image', e.target.files[0])} />

                    <Button type='submit'>Submit</Button>
                </form>
            </div>
        </AdminLayout>
    );
}

