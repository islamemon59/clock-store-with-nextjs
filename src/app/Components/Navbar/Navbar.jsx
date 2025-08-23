"use client";
import Link from "next/link";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import MobileMenuToggleButton from "./Components/MobileMenuToggleButton/MobileMenuToggleButton";
import MobileNavMenu from "./Components/MobileNavMenu/MobileNavMenu";
import LoginUser from "./Components/LoginUser/LoginUser";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathRouter = usePathname();
    if(!pathRouter.includes("/dashboard")){
  return (
    <>
      <header className="w-full bg-white shadow-sm rounded-b-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-3xl font-extrabold text-gray-900 tracking-tight"
          >
            Time Zone
          </Link>
          <MobileMenuToggleButton />
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 font-medium"
            >
              Dashboard
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
          <div className="hidden md:flex items-center space-x-4">
            <MobileNavMenu />
            <LoginUser />

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
    } else {
      <></>
    }

};

export default Navbar;
