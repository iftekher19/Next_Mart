"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:4000/products", {
          method: "GET",
        });

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Could not load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="max-w-6xl mx-auto mt-10 text-center text-xl">
        Loading products...
      </div>
    );

  if (error)
    return (
      <div className="max-w-6xl mx-auto mt-10 text-center text-red-500 text-xl">
        {error}
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <p className="text-gray-600 mb-6">
        Browse from our latest digital gadgets and devices.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}
