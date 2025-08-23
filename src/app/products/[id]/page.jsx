import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
console.log(id);
  // Fetch product via API
  const res = await fetch(`${process.env.NEXTAUTH_URL}api/products/${id}`, {
    cache: "no-store", // always fetch fresh data
  });
  const product = await res.json();

  if (!product || product.error) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">
          {product?.error || "Product not found"}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {/* Product Image */}
          <div className="relative w-full h-96 lg:h-auto lg:aspect-w-1 lg:aspect-h-1 overflow-hidden bg-white rounded-2xl p-4 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center py-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-extrabold text-blue-600 mb-6">
              ${parseFloat(product.price).toFixed(2)}
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Description
              </h2>
              <p className="text-gray-500 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <label htmlFor="quantity" className="text-gray-600 font-medium">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  defaultValue="1"
                  min="1"
                  className="w-20 border border-gray-300 rounded-lg p-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="flex items-center justify-center w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-md">
                <span>Add to Cart</span>
                <BsArrowRightShort size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
