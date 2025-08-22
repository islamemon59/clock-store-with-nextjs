"use client";

import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaSort } from "react-icons/fa";

export default function SearchAndSortControls() {
  // State to manage the visibility of the sort dropdown
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      {/* Search Bar and Button */}
      <div className="flex w-full sm:w-1/2 items-center space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
          <BsSearch size={24} />
        </button>
      </div>

      {/* Sort Button and Dropdown */}
      <div className="relative">
        <button
          className="bg-gray-100 text-gray-700 py-3 px-6 rounded-full flex items-center space-x-2 border border-gray-300 hover:bg-gray-200 transition-colors"
          onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
        >
          <FaSort />
          <span>Sort by</span>
        </button>
        {/* Dropdown Menu (conditionally shown on click) */}
        <div
          className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-10 transition-all duration-300 ease-in-out transform origin-top ${
            isSortDropdownOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0"
          }`}
        >
          <div className="py-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Default
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Price: Low to High
            </button>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
              Price: High to Low
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
