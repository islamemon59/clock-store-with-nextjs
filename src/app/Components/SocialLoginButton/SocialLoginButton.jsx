"use client";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialLoginButton = () => {
  const { data: session, status } = useSession();

  const handleGoogleLogin = async () => {
    try {
      // Google login without auto-redirect
      const result = await signIn("google", { redirect: false });

      // Check for errors returned by the signIn function
      if (result?.error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Google login failed. Try again.",
        });
        return; // Exit the function if there's an error
      }

      // If no error, login was successful
      await Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: `Welcome back!`,
        timer: 2000,
        showConfirmButton: false,
      });

      // Redirect after SweetAlert
      window.location.href = "/products";
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong during login.",
      });
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="flex items-center justify-center w-full gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow hover:shadow-md hover:bg-gray-100 transition"
    >
      <FcGoogle size={24} />
      <span className="font-medium">Login with Google</span>
    </button>
  );
};

export default SocialLoginButton;