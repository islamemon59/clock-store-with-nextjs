import React from 'react';
import { FaClock, FaBox, FaUsers, FaChartLine } from "react-icons/fa";
const Sidebar = () => {
    return (
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col">
        <h1 className="text-2xl font-bold mb-8 text-blue-600">Clock Admin</h1>
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-50"
          >
            <FaChartLine className="text-blue-500" />
            <span>Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-50"
          >
            <FaClock className="text-blue-500" />
            <span>Clocks</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-50"
          >
            <FaBox className="text-blue-500" />
            <span>Orders</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-3 p-2 rounded-md hover:bg-blue-50"
          >
            <FaUsers className="text-blue-500" />
            <span>Customers</span>
          </a>
        </nav>
      </aside>
    );
};

export default Sidebar;