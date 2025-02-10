import { Button } from '@/components/ui/button'
import AdminLayout from '@/Layouts/Admin.Layout'
import { Link } from '@inertiajs/react'
import React from 'react'

export default function show({ product }) {
    return (

        <AdminLayout>

            <div className='flex flex-col m-7 w-full'>
                <div className='flex justify-between'>
                    <h1 className='text-3xl font-bold leading-tight mt-0 mb-2'>{product.name}</h1>
                </div>
                <div className="border-t border-b border-gray-200 my-3"></div>
                <p className='text-justify'>{product.description}</p>
                <p className='text-lg font-bold'>Price: ${product.price}</p>
                <p className='text-lg font-bold'>Stock: {product.stock}</p>
                <div className='flex w-[20%] justify-between'>
                    <Button><Link href={route("admin.product.edit", product.id)}>edit</Link></Button>
                    <Button><Link href={route("admin.product.destroy", product.id)}>delete</Link></Button>
                </div>
            </div>
        </AdminLayout>
    )
}
