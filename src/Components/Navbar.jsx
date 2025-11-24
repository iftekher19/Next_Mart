"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUser from "../utils/useUser";

export default function Navbar() {
  const { user, loading, logout } = useUser();
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 shadow-md">
      <div className=" max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="flex gap-2 text-2xl font-bold tracking-wide">
        <img src="/assets/nextmart.png" alt="NextMart logo" className="w-8 h-8 object-contain" />
          NextMart
        </Link>

        <div className="flex items-center gap-6 font-medium">
          <Link href="/" className="hover:text-lime-300 transition">Home</Link>
          <Link href="/About" className="hover:text-lime-300 transition">About</Link>
          <Link href="/product" className="hover:text-lime-300 transition">Products</Link>
          {user && (
            <>
              <Link href="/AddProduct" className="hover:text-lime-300 transition">Add</Link>
              <Link href="/ManageProducts" className="hover:text-lime-300 transition">Manage</Link>
            </>
          )}
        </div>

        {/* Right section */}
        <div>
          {loading ? (
            <span className="italic text-lime-200">Loading...</span>
          ) : user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-6 h-6 rounded-full border border-white/30"
                />
                <span className="capitalize">{user.displayName?.split(" ")[0]}</span>
              </button>

              <div className="absolute right-0 hidden group-hover:block mt-2 bg-white text-gray-700 rounded shadow-lg w-52">
                <p className="px-3 py-2 text-sm border-b text-gray-500">
                  {user.email}
                </p>
                <Link
                  href="/AddProduct"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Add Product
                </Link>
                <Link
                  href="/ManageProducts"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  Manage Products
                </Link>
                <button
                  onClick={logout}
                  className="block w-full text-left px-3 py-2 text-red-600 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => router.push("/login")}
              className="bg-white text-emerald-700 font-medium px-4 py-1.5 rounded-full hover:bg-lime-100 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}