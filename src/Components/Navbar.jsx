"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useUser from "../utils/useUser";

export default function Navbar() {
  const { user, loading, logout } = useUser();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-white">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-wide"
        >
          <img
            src="/assets/nextmart.png"
            alt="NextMart logo"
            className="w-8 h-8 object-contain"
          />
          NextMart
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-white/10 focus:outline-none transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* ---------- Center nav links ---------- */}
        <div className="hidden lg:flex justify-center flex-1">
          <div className="flex items-center gap-8 text-base font-semibold">
            <Link href="/" className="hover:text-lime-300 transition">
              Home
            </Link>
            <Link href="/About" className="hover:text-lime-300 transition">
              About
            </Link>
            <Link href="/product" className="hover:text-lime-300 transition">
              Products
            </Link>
            {user && (
              <>
                <Link
                  href="/AddProduct"
                  className="hover:text-lime-300 transition"
                >
                  Add
                </Link>
                <Link
                  href="/ManageProducts"
                  className="hover:text-lime-300 transition"
                >
                  Manage
                </Link>
              </>
            )}
          </div>
        </div>

        {/* ---------- Right: Auth section ---------- */}
        <div className="hidden lg:block">
          {loading ? (
            <span className="italic text-lime-200">Loading...</span>
          ) : user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full">
                <img
                  src={user.photoURL}
                  alt="user"
                  className="w-6 h-6 rounded-full border border-white/30"
                />
                <span className="capitalize font-medium">
                  {user.displayName?.split(" ")[0]}
                </span>
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
            <div className="flex gap-2">
              <button
                onClick={() => router.push("/login")}
                className="bg-white text-emerald-700 font-medium px-4 py-1.5 rounded-full hover:bg-lime-100 transition"
              >
                Login
              </button>
              <button
                onClick={() => router.push("/Register")}
                className="bg-white text-emerald-700 font-medium px-4 py-1.5 rounded-full hover:bg-lime-100 transition"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ---------- Mobile dropdown ---------- */}
      {menuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-emerald-600 via-teal-600 to-green-600 p-4 flex flex-col gap-3 font-medium">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/About" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="/product" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          {user && (
            <>
              <Link href="/AddProduct" onClick={() => setMenuOpen(false)}>
                Add
              </Link>
              <Link href="/ManageProducts" onClick={() => setMenuOpen(false)}>
                Manage
              </Link>
            </>
          )}

          {loading ? (
            <span className="italic text-lime-200">Loading...</span>
          ) : user ? (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="text-left text-red-200 hover:text-white"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  router.push("/login");
                  setMenuOpen(false);
                }}
                className="bg-white text-emerald-700 font-medium px-4 py-1.5 rounded-full hover:bg-lime-100 transition"
              >
                Login
              </button>
              <button
                onClick={() => {
                  router.push("/Register");
                  setMenuOpen(false);
                }}
                className="bg-white text-emerald-700 font-medium px-4 py-1.5 rounded-full hover:bg-lime-100 transition"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}