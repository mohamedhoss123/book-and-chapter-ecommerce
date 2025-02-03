import React from 'react'

export default function SidePanel() {
  return (
    <div>
        <aside className="w-64 bg-white p-4 shadow-md h-screen">
            <h3 className="text-lg font-bold">Dashboard</h3>
            <ul className="mt-4 space-y-1">
                <li>
                    <a
                        href="/dashboard"
                        className="block px-2 py-1 hover:bg-gray-100 rounded"
                    >
                        Overview
                    </a>
                </li>
                <li>
                    <a
                        href="/products"
                        className="block px-2 py-1 hover:bg-gray-100 rounded"
                    >
                        Products
                    </a>
                </li>
                <li>
                    <a
                        href="/orders"
                        className="block px-2 py-1 hover:bg-gray-100 rounded"
                    >
                        Orders
                    </a>
                </li>
                <li>
                    <a
                        href="/customers"
                        className="block px-2 py-1 hover:bg-gray-100 rounded"
                    >
                        Customers
                    </a>
                </li>
            </ul>
        </aside>
    </div>
  )
}
