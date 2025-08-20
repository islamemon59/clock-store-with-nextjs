import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Brand */}
        <div className="text-white text-2xl font-bold">
          ClockStore
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/products" className="hover:text-white transition">Products</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

        {/* Social */}
        <div className="flex space-x-4">
          <Link href="#"><FaFacebookF className="hover:text-blue-500 transition" /></Link>
          <Link href="#"><FaTwitter className="hover:text-blue-400 transition" /></Link>
          <Link href="#"><FaInstagram className="hover:text-pink-500 transition" /></Link>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} ClockStore. All rights reserved.
      </div>
    </footer>
  );
}
