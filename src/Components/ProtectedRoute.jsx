"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProtectedRoute({ children }) {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/Login")
  }, [status, router])

  if (status === "loading") return <p className="text-center mt-10">Loading...</p>

  return <>{children}</>
}