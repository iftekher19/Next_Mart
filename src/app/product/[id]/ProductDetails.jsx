"use client";
import { useState, useEffect } from "react";

export default function ProductDetails({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product details");
        const data = await res.json();
        setProduct(data);
      } catch {
        setError("Unable to load product");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Loading state
  if (loading)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-lg text-gray-600">Loading product details…</p>
      </div>
    );

  // Error state
  if (error)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );

  // Not found
  if (!product)
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );

  // Success view
  return (
    <div className="max-w-4xl mx-auto my-10 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Product Image */}
      <div className="w-full bg-gray-50 flex justify-center items-center p-4">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="max-h-[450px] w-auto rounded-lg object-contain"
        />
      </div>

      {/* Product Content */}
      <div className="p-6 space-y-5">
        {/* Title + Status Badge */}
        <div className="flex justify-between items-start gap-3">
          <h1 className="text-3xl font-bold text-gray-900">
            {product.title}
          </h1>
          <span
            className={`px-3 py-1 text-sm rounded-full font-medium ${
              product.status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {product.status || "unknown"}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed text-base md:text-lg">
          {product.fullDescription || product.shortDescription}
        </p>

        {/* Price */}
        <p className="text-2xl font-semibold text-emerald-600">
          ${product.price.toFixed(2)}
        </p>

        {/* Back Link */}
        <a
          href="/product"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          ← Back to Products
        </a>
      </div>
    </div>
  );
}