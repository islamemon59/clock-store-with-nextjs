import Link from 'next/link';
import { MdOutlineSearchOff } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <MdOutlineSearchOff size={100} className="text-red-500 mb-6 animate-bounce" />
      <h1 className="text-5xl font-bold text-gray-800 mb-4">404 - Not Found</h1>
      <p className="text-gray-600 mb-8">Oops! We couldn’t find the page you were looking for.</p>
      <Link href="/">
        <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
          Return Home
        </button>
      </Link>
    </div>
  );
}
