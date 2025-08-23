'use client' // Error boundaries must be Client Components

import { MdErrorOutline } from "react-icons/md";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <MdErrorOutline size={80} className="text-red-500 mb-6 animate-bounce" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-8">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </body>
    </html>
  )
}
