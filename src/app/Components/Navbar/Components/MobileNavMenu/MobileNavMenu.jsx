"use client"
import Link from "next/link";
import { FiShoppingCart, FiUser, FiX } from "react-icons/fi";

const MobileNavMenu = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-8 animate-fade-in-down">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-800 hover:text-red-500 focus:outline-none"
          >
            <FiX className="h-8 w-8" />
          </button>
          <nav className="flex flex-col items-center space-y-6 text-2xl font-semibold">
            <Link
              href="/products"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200"
            >
              Products
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200"
            >
              Dashboard
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-indigo-600 transition-colors duration-200"
            >
              Contact
            </Link>
            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col items-center space-y-6">
              <Link
                href="/signIn"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-4 text-gray-800 hover:text-indigo-600 transition-colors duration-200"
              >
                <FiUser className="h-6 w-6" />
                <span>Login</span>
              </Link>
              <Link
                href="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-4 text-gray-800 hover:text-indigo-600 transition-colors duration-200"
              >
                <FiShoppingCart className="h-6 w-6" />
                <span>Cart</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileNavMenu;
