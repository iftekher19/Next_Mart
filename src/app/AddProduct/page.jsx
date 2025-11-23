"use client"
import ProtectedRoute from "@/src/Components/ProtectedRoute"
import ProductForm from "@/src/Components/ProductForm"

export default function AddProductPage() {
  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>
        <ProductForm />
      </div>
    </ProtectedRoute>
  )
}