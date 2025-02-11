import { Button } from '@/components/ui/button'
import AdminLayout from '@/Layouts/Admin.Layout'
import { Link, router } from '@inertiajs/react'
import React, { useEffect, useRef, useState } from 'react'
import { Table } from '@/components/ui/table'
import { Input } from '@/components/ui/input'


export default function index({ products }) {
    const [data, setData] = useState("")
    function handel() {
        router.get(route("admin.product.index"), { q: data })
    }
    return (
        <AdminLayout>
            <div className='flex flex-col'>
                <div className='flex w-full justify-around pr-20 mt-7'>
                    <div className='flex w-[400px] justify-between'>
                        <Input type='text' placeholder='search' onChange={(e) => setData(e.target.value)} className="w-[300px]" />
                        <Button onClick={handel}>submit</Button>
                    </div>
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

