"use client";

import { useRouter } from "next/navigation";
import useUser from "../utils/useUser";  // your hook from earlier

export default function ProtectedRoute({ children }) {
  const { user, loading } = useUser();
  const router = useRouter();

  // while Firebase is still checking user state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Checking authentication...</p>
      </div>
    );
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  // ✅ User logged‑in → show protected content
  return <>{children}</>;
}