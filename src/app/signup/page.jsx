import Link from "next/link";
import SignupForm from "./Components/SignupForm/SignupForm";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <SignupForm />
        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-gray-400 font-medium">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <div className="flex justify-center">
          <SocialLoginButton />
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-500 text-sm sm:text-base">
          Already have an account?{" "}
          <Link
            href="/signIn"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
