"use client";

import { useRouter } from "next/navigation";
import useUser from "../utils/useUser";  

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

  return <>{children}</>;
}