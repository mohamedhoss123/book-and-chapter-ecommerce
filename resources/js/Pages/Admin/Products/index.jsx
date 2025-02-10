import { Button } from '@/components/ui/button'
import AdminLayout from '@/Layouts/Admin.Layout'
import { Link } from '@inertiajs/react'
import React from 'react'
export default function index() {
    return (
        <AdminLayout> <div className='flex'>
            <div className='flex w-full justify-end pr-20 mt-7'>
                <Button><Link href="/products/create">add product +</Link></Button>
            </div>
        </div>
        </AdminLayout>
    )
}
