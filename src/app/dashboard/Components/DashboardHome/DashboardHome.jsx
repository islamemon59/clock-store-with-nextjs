import React from "react";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";

const DashboardHome = () => {
  return (
    <section className="flex-1 p-8 bg-gray-50 min-h-screen">
      {/* Title */}
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg text-white flex items-center justify-between transform hover:scale-105 transition">
          <div>
            <h3 className="text-sm font-medium">Total Clocks</h3>
            <p className="text-3xl font-bold mt-2">120</p>
          </div>
          <FaBox className="text-4xl opacity-80" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg text-white flex items-center justify-between transform hover:scale-105 transition">
          <div>
            <h3 className="text-sm font-medium">Orders</h3>
            <p className="text-3xl font-bold mt-2">85</p>
          </div>
          <FaShoppingCart className="text-4xl opacity-80" />
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg text-white flex items-center justify-between transform hover:scale-105 transition">
          <div>
            <h3 className="text-sm font-medium">Customers</h3>
            <p className="text-3xl font-bold mt-2">40</p>
          </div>
          <FaUsers className="text-4xl opacity-80" />
        </div>
      </div>

      {/* Recent Items */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">
          Recent Products
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  Name
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  Price
                </th>
                <th className="py-3 px-4 text-sm font-semibold text-gray-600">
                  Stock
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-gray-800 font-medium">
                  Titan CH195SKSTBLLT
                </td>
                <td className="py-3 px-4 text-gray-700">$130</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">
                    In Stock
                  </span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-gray-800 font-medium">
                  Casio G-Shock X200
                </td>
                <td className="py-3 px-4 text-gray-700">$250</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-600">
                    Low Stock
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-gray-50 transition">
                <td className="py-3 px-4 text-gray-800 font-medium">
                  Rolex Oyster Perpetual
                </td>
                <td className="py-3 px-4 text-gray-700">$980</td>
                <td className="py-3 px-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-600">
                    Out of Stock
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DashboardHome;
