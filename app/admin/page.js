"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { signInAdmin } from "@/utils/api"; 

export default function AdminAuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await signInAdmin(email, password);
      router.push("/admin/dashboard");
    } catch (error) {
        if(!error.response) {
          return {
            success: false,
            message: setError(
              "Cannot connect to the server. Please try again later."
            ),
          };
        } else {
          return {success: false, message: setError(error.response?.data.error || "Sign-in failed. Please check your credentials.")}
        }
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Admin Sign In</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignIn} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
