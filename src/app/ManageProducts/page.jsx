"use client";

import ProtectedRoute from "../../Components/ProtectedRoute";
import { useEffect, useState } from "react";

export default function ManageProductsPage() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch("https://next-mart-rho.vercel.app/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to load products", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product by ID
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await fetch(`https://next-mart-rho.vercel.app/products/${id}`, {
        method: "DELETE",
      });

      // Remove deleted product from UI
      setProducts(products.filter((p) => p._id !== id));
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-5xl mx-auto mt-12">
        <h1 className="text-2xl font-semibold mb-6">Manage Products</h1>

        <table className="table-auto w-full bg-white border shadow">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="p-3 text-left">Title</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{p.title}</td>
                <td className="p-3">${p.price}</td>
                <td className="p-3 space-x-2">
                  <a
                    href={`/Products/${p._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    View
                  </a>

                  <button
                    onClick={() => handleDelete(p._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ProtectedRoute>
  );
}
