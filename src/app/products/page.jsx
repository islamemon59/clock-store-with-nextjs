import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import SearchAndSortControls from "./Components/SearchAndSortControls/SearchAndSortControls";

export default async function ProductsPage({ searchParams }) {
  const searchTerm = searchParams.search || "";
  const sortOption = searchParams.sort || "default";

  const allProducts = await getProducts();
  console.log(allProducts);

  // const filteredAndSortedProducts = allProducts
  //   .filter(
  //     (product) =>
  //       product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       product.description.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  //   .sort((a, b) => {
  //     if (sortOption === "price-asc") {
  //       return parseFloat(a.price) - parseFloat(b.price);
  //     }
  //     if (sortOption === "price-desc") {
  //       return parseFloat(b.price) - parseFloat(a.price);
  //     }
  //     return 0;
  //   });

  return (
    <div className="bg-gray-50 min-h-screen p-8 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Search and Sort UI */}
        <div className="mb-8">
          <SearchAndSortControls />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
            >
              <div className="relative w-full h-64 overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.name}
                </h2>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-blue-600 font-bold text-2xl">
                    ${parseFloat(product.price).toFixed(2)}
                  </span>
                </div>
                <Link href={`/products/${product._id}`} passHref>
                  <button className="mt-6 w-full bg-white text-blue-600 border border-blue-600 py-3 rounded-2xl hover:bg-blue-600 hover:text-white transition-colors font-medium flex items-center justify-center space-x-2">
                    <span>Details</span>

                    <BsArrowRightShort size={24} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Function to simulate fetching data from an API
async function getProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/products`);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const products = await res.json();
  return products
}
