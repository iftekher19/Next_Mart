"use client"
import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

export default function ProductForm() {
  const [form, setForm] = useState({ title: "", shortDesc: "", fullDesc: "", price: "", image: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("/api/products", form)
    toast.success("Product added successfully!")
    setForm({ title: "", shortDesc: "", fullDesc: "", price: "", image: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Title" className="border p-2 w-full" value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })} required />
      <textarea placeholder="Short Description" className="border p-2 w-full" value={form.shortDesc}
        onChange={(e) => setForm({ ...form, shortDesc: e.target.value })} />
      <textarea placeholder="Full Description" className="border p-2 w-full" value={form.fullDesc}
        onChange={(e) => setForm({ ...form, fullDesc: e.target.value })} />
      <input type="number" placeholder="Price" className="border p-2 w-full" value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input type="text" placeholder="Image URL" className="border p-2 w-full" value={form.image}
        onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  )
}