"use client";

import ProtectedRoute from "../../Components/ProtectedRoute";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProductPage() {
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    imageUrl: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("✅ Product added successfully!");
        setForm({
          title: "",
          shortDescription: "",
          fullDescription: "",
          price: "",
          imageUrl: "",
        });
      } else {
        toast.error("❌ Failed to add product.");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md relative">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />

        <h1 className="text-2xl font-semibold mb-6">Add New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Product Title"
            className="w-full border p-2 rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Short Description"
            className="w-full border p-2 rounded"
            value={form.shortDescription}
            onChange={(e) =>
              setForm({ ...form, shortDescription: e.target.value })
            }
            required
          />

          <textarea
            placeholder="Full Description"
            className="w-full border p-2 rounded h-28"
            value={form.fullDescription}
            onChange={(e) =>
              setForm({ ...form, fullDescription: e.target.value })
            }
            required
          />

          <input
            type="number"
            placeholder="Price"
            className="w-full border p-2 rounded"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            className="w-full border p-2 rounded"
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Adding..." : "Add Product"}
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}