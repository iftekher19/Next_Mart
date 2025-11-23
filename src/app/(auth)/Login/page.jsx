"use client"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-4">Login to NextMart</h1>
      <button onClick={() => signIn("google")} className="bg-red-500 text-white px-4 py-2 rounded mt-2">
        Login with Google
      </button>
      <p className="text-gray-400 mt-2">or use demo credentials</p>
      <button
        onClick={() => signIn("credentials", { email: "demo@nextmart.com", password: "demo123", callbackUrl: "/" })}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
      >
        Demo Login
      </button>
    </div>
  )
}