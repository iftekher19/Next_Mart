"use client"
import ProductCard from "../../Components/ProductCard"

const dummyProducts = [
  { id: 1, title: "Tech Phone", description: "High performance smartphone", price: 699, image: "https://via.placeholder.com/200" },
  { id: 2, title: "Laptop", description: "Powerful laptop for professionals", price: 1299, image: "https://via.placeholder.com/200" },
  { id: 3, title: "Headphones", description: "Noise-cancelling wireless headphones", price: 199, image: "https://via.placeholder.com/200" },
  { id: 4, title: "Smartwatch", description: "Track health & fitness", price: 249, image: "https://via.placeholder.com/200" },
  { id: 5, title: "Mouse", description: "Wireless ergonomic mouse", price: 49, image: "https://via.placeholder.com/200" },
  { id: 6, title: "Keyboard", description: "Mechanical keyboard", price: 99, image: "https://via.placeholder.com/200" },
]

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <p className="text-gray-600 mb-6">Browse from our latest digital gadgets and devices.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyProducts.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  )
}