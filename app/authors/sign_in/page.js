"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInAuthor } from "@/utils/api";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await signInAuthor(email, password);
      setMessage("Login successful! Redirecting...");
      router.push("/dashboard/authors/:authorId"); // Adjust this path as needed
    } catch (error) {
      setMessage(error.response?.data?.message || "Invalid Email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-200 grid grid-cols-2 m-10 rounded-2xl">
      <div className="m-8">
        <img src="/images/logo.png" className="w-12 h-7" alt="Logo" />
        <h2 className="mt-24 m-2 text-2xl font-bold">
          Your Stories, Your <br />
          Voice
        </h2>
        <p className="w-96">
          Itan is a revolutionary publishing platform designed specifically for
          writers like you to seamlessly publish your work to a global audience,
          retaining creative control and ownership every step of the way.
        </p>
        <div className="mt-40">
          <img
            src="/images/community_img.png"
            className="w-32"
            alt="Community"
          />
          <p>
            Share your story with the world. Join our community of authors
            today!
          </p>
          <div>
            <div className="flex items-center h-9">
              <img
                src="/images/check.png"
                className="w-5 h-4 mr-3"
                alt="Check"
              />
              <p>Reach readers worldwide with your work</p>
            </div>
            <div className="flex items-center h-9">
              <img
                src="/images/check.png"
                className="w-5 h-4 mr-3"
                alt="Check"
              />
              <p>Monetize your writing, amplify your impact</p>
            </div>
            <div className="flex items-center h-9">
              <img
                src="/images/check.png"
                className="w-5 h-4 mr-3"
                alt="Check"
              />
              <p>Become part of a supportive and inspiring author community</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-10 mr-7 my-5">
        <div>
          <p className="text-2xl font-bold">Welcome!</p>
          <p className="text-sm mb-4">
            Don’t have an account?{" "}
            <Link
              href="/authors/sign_up"
              className="font-bold cursor-pointer hover:text-blue-700"
            >
              <span>Create One</span>
            </Link>
          </p>
        </div>

        <form onSubmit={handleSignIn}>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="h-14 text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Johndoe@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="h-14 text-lg bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <div className="relative">
              <button
                type="submit"
                className="h-14 text-2xl font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 rounded-lg px-5 py-2.5 w-full"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Log In"}
              </button>
              <Link
                href="/forgot-password"
                className="absolute right-0 hover:text-blue-700"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="button"
              className="mt-10 h-14 hover:text-white text-[#4e4c4c] space-x-5 flex w-full px-3 py-2 font-medium text-center items-center justify-center bg-gray-200 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              <img src="/images/google.png" className="w-6 h-6" alt="Google" />
              <p>Continue with Google</p>
            </button>
          </div>

          {message && (
            <p className="mt-4 text-center text-sm text-red-600">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
