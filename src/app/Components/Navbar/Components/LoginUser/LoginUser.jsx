"use client";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Link from "next/link";
import Loading from "@/app/loading";

const LoginUser = () => {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  if (status === "loading") {
    return <Loading/>
  }

  if (!session) {
    return (
      <Link
        href="/signIn"
        className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
      >
        <span>Login</span>
      </Link>
    );
  }

  const handleLogout = async () => {
    await signOut();
    toast.success("Logged out successfully!");
  };

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button onClick={() => setOpen(!open)} className="focus:outline-none">
        {session.user?.image ? (
          <img
            src={session.user.image}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border border-gray-300 shadow-md"
          />
        ) : (
          <FaUserCircle className="w-10 h-10 text-gray-500" />
        )}
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-xl p-4 border border-gray-200 z-50">
          {/* User Info */}
          <div className="flex items-center gap-3 mb-3">
            {session.user?.image ? (
              <img
                src={session.user.image}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
              />
            ) : (
              <FaUserCircle className="w-10 h-10 text-gray-500" />
            )}
            <div>
              <p className="font-medium text-gray-800">{session.user?.name}</p>
              <p className="text-sm text-gray-500">{session.user?.email}</p>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-2" />

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginUser;
