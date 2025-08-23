import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort, BsHeart, BsShareFill } from "react-icons/bs";

// Static Banner Component
const StaticBanner = () => (
  <div className="bg-blue-100 border border-blue-300 rounded-xl p-6 mt-8 text-center">
    <h3 className="text-xl font-semibold text-blue-700 mb-2">Special Offer!</h3>
    <p className="text-blue-600">
      Enjoy a 15% discount on your first order. Use code WELCOME15 at checkout.
    </p>
    <Link
      href="/products"
      className="inline-block mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 transition-colors duration-200"
    >
      Shop Now <BsArrowRightShort className="inline-block ml-1 align-middle" />
    </Link>
  </div>
);

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  console.log(id);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/products/${id}`,
    {
      cache: "no-store", // always fetch fresh data
    }
  );

  const product = await res.json();

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500">Product not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-16">
          {/* Product Image */}
          <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-md">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {product.name}
              </h2>
              <p className="mt-2 text-xl text-blue-600 font-semibold">
                ${parseFloat(product.price).toFixed(2)}
              </p>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-gray-500">{product.description}</p>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-900">
                  Available Colors
                </h4>
                <div className="flex items-center mt-2 space-x-3">
                  <button className="w-8 h-8 rounded-full bg-blue-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"></button>
                  <button className="w-8 h-8 rounded-full bg-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"></button>
                  <button className="w-8 h-8 rounded-full bg-black shadow-sm focus:outline-none focus:ring-2 focus:ring-black"></button>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <label
                    htmlFor="quantity"
                    className="text-sm font-medium text-gray-700"
                  >
                    Qty
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    defaultValue="1"
                    min="1"
                    className="w-16 border border-gray-300 rounded-md py-2 px-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-500 hover:text-blue-600 focus:outline-none">
                    <BsHeart className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Add to wishlist</span>
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 focus:outline-none">
                    <BsShareFill className="h-6 w-6" aria-hidden="true" />
                    <span className="sr-only">Share</span>
                  </button>
                </div>
              </div>
              <button className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add to Cart{" "}
                <BsArrowRightShort className="ml-2" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Static Banner */}
        <StaticBanner />
      </div>
    </div>
  );
}
