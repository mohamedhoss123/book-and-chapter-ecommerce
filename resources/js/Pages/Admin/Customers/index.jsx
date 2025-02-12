import { Button } from '@/components/ui/button'
import AdminLayout from '@/Layouts/Admin.Layout'
import { Link, router } from '@inertiajs/react'
import React, { useEffect, useRef, useState } from 'react'
import { Table } from '@/components/ui/table'
import { Input } from '@/components/ui/input'


export default function index({ customers }) {
    const [data, setData] = useState("")
    function handel() {
        router.get(route("admin.customers.index"), { q: data })
    }
    return (
        <AdminLayout>
            <div className='flex flex-col'>
                <div className='flex w-full justify-start pr-20 mt-7'>
                    <div className='flex w-[400px] justify-between'>
                        <Input type='text' placeholder='search' onChange={(e) => setData(e.target.value)} className="w-[300px]" />
                        <Button onClick={handel}>submit</Button>
                    </div>

                </div>
                <div className='mt-4'   >
                    <Table>
                        <thead>
                            <tr>
                                <th>Name</th>

                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.data.map((product) => (
                                <tr key={product.id} className='border'>
                                    <td className='border'>{product.name}</td>

                                    <td>

                                        <Link size="sm" variant="button">view</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <div className='mt-4 flex justify-center'>
                        <Link href={customers.first_page_url}>first</Link>

                        <Link href={customers.next_page_url}>next</Link>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

