import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import MobileMenuToggleButton from "./Components/MobileMenuToggleButton/MobileMenuToggleButton";
import MobileNavMenu from "./Components/MobileNavMenu/MobileNavMenu";

// A professional and minimal navbar component for an e-commerce site
const Navbar = () => {
  // State to manage the visibility of the mobile menu

  return (
    <>
      {/* Main Navbar container for desktop and mobile */}
      <header className="w-full bg-white shadow-sm rounded-b-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-gray-900 tracking-tight"
          >
            Timepiece
          </Link>

          {/* Mobile Menu Toggle Button (Hamburger icon) */}

          {/* Desktop Navigation Links */}
          <MobileMenuToggleButton />
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/shop"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Shop
            </Link>
            <Link
              href="/collections"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>
          {/* Action Icons and Buttons for desktop */}
          <div className="hidden md:flex items-center space-x-4">
          <MobileNavMenu />
            {/* Login Button with icon */}
            <Link
              href="/signIn"
              className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              <FiUser className="w-5 h-5" />
              <span>Login</span>
            </Link>
            {/* Shopping Cart Button with icon */}
            <div className="relative group cursor-pointer">
              <Link href="/cart">
                <FiShoppingCart className="w-6 h-6 text-gray-600 hover:text-indigo-600 transition-colors duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
