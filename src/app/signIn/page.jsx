import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import SigninForm from "./Components/SigninForm/SigninForm";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Sign In
        </h2>
        <p className="mt-2 text-center text-gray-500 text-sm sm:text-base">
          Welcome back! Enter your email and password to access your account.
        </p>

        <SigninForm />

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 font-medium">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <button className="flex items-center justify-center w-full border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition shadow-sm gap-3 font-medium">
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-gray-500 text-sm sm:text-base">
          Don’t have an account?{" "}
          <Link
            href="/signup"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
