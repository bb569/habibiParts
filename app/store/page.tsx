"use client";
import { createClient } from "@supabase/supabase-js";
import { unstable_noStore as noStore } from "next/cache";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FunContext } from "../context/Context";

export const dynamic = "force-dynamic";

interface Product {
  id: string;
  title: string;
  price: number;
  imag?: string | null;
}

export default function StorePage() {
  const [isClient, setIsClient] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // استفاده از context
  const { getQty, handleQty, deHandleQty } = FunContext();

  useEffect(() => {
    setIsClient(true);
    fetchProducts();
  }, []);

  async function fetchProducts() {
    noStore();
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    try {
      const { data, error: queryError } = await supabase
        .from("Habibi")
        .select("id, title, price, imag")
        .limit(10)
        .order("id", { ascending: false });

      if (queryError) throw queryError;

      setProducts(data || []);
    } catch (err) {
      const error = err as Error;
      console.error("Full error details:", error);
      setError(error.message);
    }
  }

  if (!isClient) {
    return <div className="container mx-auto p-4">در حال بارگذاری...</div>;
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-red-500 text-center">
        <h2 className="text-xl font-bold">خطا در سیستم</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">محصولات</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`./store/${product.id}`} passHref>
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative h-48 w-full">
                  {product.imag ? (
                    <Image
                      src={product.imag}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  ) : (
                    <div className="bg-gray-100 h-full w-full flex items-center justify-center">
                      <span className="text-gray-400">بدون تصویر</span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h2 className="font-semibold text-lg mb-2">
                    {product.title}
                  </h2>
                  <p className="text-gray-600">
                    {product.price?.toLocaleString("fa-IR")} تومان
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      className="w-6 h-6 bg-blue-500 rounded-sm text-white text-center"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleQty(Number(product.id));
                      }}
                    >
                      +
                    </button>
                    <span>{getQty(Number(product.id))}</span>
                    <button
                      className="w-6 h-6 bg-red-500 rounded-sm text-white text-center"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        deHandleQty(Number(product.id));
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center py-8">هیچ محصولی یافت نشد</p>
      )}
    </div>
  );
}