"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { signOutAdmin } from "@/utils/api"; 

const AdminDashboard = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    setError(null);
    try {
      await signOutAdmin();
      router.push("/admin");
    } catch (err) {
      if (!error.response) {
        return {
          success: false,
          message: setError(
            "Cannot connect to the server. Please try again later."
          ),
        };
      } else {
        return {
          success: false,
          message: setError(
            error.response?.data.error || "Sign-out failed. Please try again."
          ),
        };
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handleSignOut}
        className="w-24 h-14 mt-4 bg-red-500 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Signing out..." : "Sign Out"}
      </button>
    </div>
  );
};

export default AdminDashboard;
