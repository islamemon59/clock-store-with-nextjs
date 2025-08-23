// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // URLs that need protection
  const protectedPaths = ["/dashboard", "/dashboard/addproduct"];

  if (protectedPaths.map((path) => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/signIn", req.url));
    }
  }

  // Allow request to continue
  return NextResponse.next();
}

// Apply middleware to specific paths
export const config = {
  matcher: ["/dashboard/:path*", "/dashboard"],
};
