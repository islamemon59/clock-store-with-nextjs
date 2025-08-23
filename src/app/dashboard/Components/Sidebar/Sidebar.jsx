"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaClock,
  FaBox,
  FaUsers,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: FaChartLine },
    { name: "Add Product", href: "/dashboard/addproduct", icon: FaClock },
    { name: "Products", href: "/dashboard/products", icon: FaBox },
    { name: "Users", href: "/dashboard/users", icon: FaUsers },
  ];

  return (
    <aside className="h-screen w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-lg flex flex-col">
      {/* Logo */}
      <div className="p-6 text-center border-b border-blue-500">
        <h1 className="text-2xl font-bold tracking-wide">Clock Admin</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-white text-blue-700 shadow-md font-semibold"
                  : "hover:bg-blue-700 hover:translate-x-1"
              }`}
            >
              <Icon className="text-lg" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-blue-500">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 transition-all">
          <FaSignOutAlt className="text-lg" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
