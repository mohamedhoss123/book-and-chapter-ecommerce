import AdminLayout from '@/Layouts/Admin.Layout'
import React, { useEffect } from 'react'

export default function index(products) {
    useEffect(() => {
        console.log(products)
    })
    return (
        <AdminLayout>

        </AdminLayout>
    )
}
