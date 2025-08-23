import React from 'react';

const DashboardHome = () => {
    return (
      <section className="flex-1 p-8">
        <h2 className="text-3xl font-semibold mb-6">Dashboard Overview</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Total Clocks</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Orders</h3>
            <p className="text-2xl font-bold">85</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="text-gray-500 text-sm">Customers</h3>
            <p className="text-2xl font-bold">40</p>
          </div>
        </div>

        {/* Recent Items */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Products</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2">Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Stock</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr className="border-b">
                <td className="py-2">Titan CH195SKSTBLLT</td>
                <td className="py-2">$130</td>
                <td className="py-2">In Stock</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Casio G-Shock X200</td>
                <td className="py-2">$250</td>
                <td className="py-2">Low Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
};

export default DashboardHome;