"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../../../utils/firebase"; 

export default function RegisterPage() {
  const router = useRouter();
  const auth = getAuth(app);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      setMessage({ type: "success", text: "🎉 Registration successful! Redirecting..." });
      setTimeout(() => router.push("/login"), 1600);
    } catch (error) {
      setMessage({ type: "error", text: error.message });
    } finally {
      setLoading(false);
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
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-600">
          Create Your Account
        </h1>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            disabled={loading}
            className={`py-2 bg-green-600 text-white rounded hover:bg-green-700 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {message.text && (
            <p
              className={`text-center mt-2 ${
                message.type === "success" ? "text-green-600" : "text-red-500"
              }`}
            >
              {message.text}
            </p>
          )}
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-green-800 font-semibold cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}