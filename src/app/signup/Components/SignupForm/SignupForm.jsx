"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      toast("Please wait..")
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.status === 201) {
        Swal.fire({
          title: "🎉 Account Created",
          text: "Your account has been created successfully!",
          icon: "success",
          confirmButtonText: "Go to Login",
          confirmButtonColor: "#3B82F6",
        }).then(() => {
          router.push("/signIn");
        });
      } else if (res.status === 400 && data.message === "User already exists") {
        toast.error("User already exists!");
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Server error, try again later");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 space-y-5"
    >
      {/* Title */}
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Create Account
      </h2>
      <p className="text-center text-gray-500 text-sm">
        Join us today! Fill in the details to get started.
      </p>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
          className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          name="password"
          type="password"
          placeholder="Create a strong password"
          required
          className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md"
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>

      {/* Footer */}
      <p className="mt-6 text-center text-gray-500 text-sm sm:text-base">
        Already have an account?{" "}
        <a
          href="/signIn"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign In
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
