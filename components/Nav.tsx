"use client";
export interface match {
  data2: string;
  itemTitle: string;
  hrf: string;
}
import Link from "next/link";
import { FunContext } from "@/app/context/Context";

export default function Nav() {
  const { cartQty } = FunContext();

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* لوگو */}
          <Link href="/">
            <div className="text-2xl font-bold text-blue-600 cursor-pointer">
              لوازم یدکی خودرو
            </div>
          </Link>

          {/* منوی ناوبری */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300">
                خانه
              </span>
            </Link>
            <Link href="/store">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300">
                محصولات
              </span>
            </Link>
            <Link href="/about">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300">
                درباره ما
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-700 hover:text-blue-600 cursor-pointer transition duration-300">
                تماس با ما
              </span>
            </Link>
          </nav>

          {/* دکمه‌های سمت راست */}
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <div className="relative cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-700 hover:text-blue-600 transition duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {cartQty}
                </span>
              </div>
            </Link>
            <Link href="/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                ورود
              </button>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}