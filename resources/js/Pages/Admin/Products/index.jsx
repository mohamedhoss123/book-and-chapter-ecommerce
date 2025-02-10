import { Button } from '@/components/ui/button'
import AdminLayout from '@/Layouts/Admin.Layout'
import { Link } from '@inertiajs/react'
import React, { useEffect } from 'react'
import { Table } from '@/components/ui/table'


export default function index({ products }) {
    useEffect(() => {
        console.log(products)
    })
    return (
        <AdminLayout>
            <div className='flex flex-col'>
                <div className='flex w-full justify-end pr-20 mt-7'>
                    <Button><Link href="/products/create">add product +</Link></Button>
                </div>
                <div className='mt-4'>
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.data.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.stock}</td>
                                    <td>
                                        <Button size="sm"><Link href={`/products/${product.id}/edit`}>Edit</Link></Button>
                                        <Button size="sm" variant="danger">Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className='mt-4 flex justify-center'>
                        <Link href={products.first_page_url}>first</Link>

                        <Link href={products.next_page_url}>next</Link>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

