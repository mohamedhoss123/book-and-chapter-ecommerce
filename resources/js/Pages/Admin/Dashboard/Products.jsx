import AdminLayout from '@/Layouts/Admin.Layout'
import React from 'react'

export default function Products() {
  const products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 9.99 },
    { id: 3, name: 'Product 3', price: 7.99 },
  ]

  return (
    <AdminLayout><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl font-bold leading-tight mt-0 mb-2">Products</h1>
    <ul className="divide-y divide-gray-200">
      {products.map((product) => (
        <li key={product.id} className="py-4 flex">
          <div className="flex-1 flex justify-between">
            <div className="text-lg">
              <a href="#" className="text-gray-900">
                {product.name}
              </a>
            </div>
            <div className="text-lg font-bold">
              ${product.price}
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div></AdminLayout>
  )
}

