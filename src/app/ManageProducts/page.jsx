"use client"
import ProtectedRoute from "../../Components/ProtectedRoute"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ManageProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("/api/products").then(res => setProducts(res.data))
  }, [])

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto mt-12">
        <h1 className="text-2xl font-semibold mb-6">Manage Products</h1>
        <table className="table-auto w-full bg-white border shadow">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3">Title</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.title}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3 space-x-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">View</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  )
}