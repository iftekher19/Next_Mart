"use client"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <nav className="sticky top-0 bg-white border-b shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">NextMart</Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Products">Products</Link>
          {session && (
            <>
              <Link href="/AddProduct">Add</Link>
              <Link href="/ManageProducts">Manage</Link>
            </>
          )}
        </div>
        {!session ? (
          <button onClick={() => signIn()} className="bg-blue-600 text-white px-4 py-1 rounded">Login</button>
        ) : (
          <div className="relative group">
            <button className="px-3 py-1 bg-gray-100 rounded">{session.user.name}</button>
            <div className="absolute right-0 hidden group-hover:block bg-white border rounded-md shadow-lg mt-2 w-48">
              <Link href="/AddProduct" className="block px-3 py-1 hover:bg-gray-100">Add Product</Link>
              <Link href="/ManageProducts" className="block px-3 py-1 hover:bg-gray-100">Manage</Link>
              <button onClick={() => signOut()} className="block text-left w-full px-3 py-1 hover:bg-gray-100 text-red-500">Logout</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}