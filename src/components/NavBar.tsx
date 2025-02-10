"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Blog App
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className={`hover:text-gray-300 ${pathname === "/" ? "text-blue-400" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-gray-300 ${pathname === "/about" ? "text-blue-400" : ""}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
