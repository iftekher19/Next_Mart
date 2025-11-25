"use client";

import { useRouter } from "next/navigation";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import app from "../../../utils/firebase";  
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("✅ Logged in user:", user);
      router.push("/");
    } catch (error) {
      console.error("❌ Login failed:", error.message);
      alert("Google login failed. Try again.");
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) router.push("/"); 
    });
    return () => unsubscribe();
  }, [auth, router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center w-96">
        <h1 className="text-2xl font-bold mb-6 text-green-600">Login to NextMart</h1>

        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 bg-green-500 text-white w-full py-2 rounded hover:bg-red-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-6 h-6"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.1 0 5.9 1.1 8 3.3l6-6C34.7 3.3 29.8 1 24 1 14.9 1 7 6.7 3.2 14.7l7.1 5.5C12.1 14.7 17.4 9.5 24 9.5z"
            />
            <path
              fill="#34A853"
              d="M46.1 24.5c0-1.6-.2-3.3-.6-4.8H24v9.1h12.6c-.6 3.1-2.4 5.7-4.9 7.4l7.6 5.9C43.4 38.5 46.1 32 46.1 24.5z"
            />
            <path
              fill="#4A90E2"
              d="M10.3 28.2a14.6 14.6 0 010-8.4l-7.1-5.5a23.9 23.9 0 000 19.4l7.1-5.5z"
            />
            <path
              fill="#FBBC05"
              d="M24 46.2c6.4 0 12-2.1 16-5.7l-7.6-5.9c-2.1 1.4-4.8 2.3-8.4 2.3-6.6 0-12.2-4.4-14.3-10.3l-7.1 5.5C7 41.3 14.9 46.2 24 46.2z"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}