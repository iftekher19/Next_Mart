"use client"
import Link from "next/link"

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded-lg shadow hover:shadow-lg p-4 transition">
      <img src={product.imageUrl} alt={product.title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-3 text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-500 text-sm truncate">{product.description}</p>
      <p className="mt-2 font-bold text-blue-600">${product.price}</p>
      <Link href={`/product/${product._id}`} className="text-sm text-blue-600 mt-2 inline-block hover:underline">
        View Details
      </Link>
    </div>
  )
}