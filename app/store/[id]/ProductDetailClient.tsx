'use client';

import { DataType } from "../../../components/Product";
import AddCart from "@/components/AddCart";
import Head from 'next/head';
import { fronNumber } from "@/app/utils/number";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

interface ProductDetailClientProps {
  params: {
    productId: string;
  };
}

export default function ProductDetailClient({ params }: ProductDetailClientProps) {
  const { productId } = params;
  const [product, setProduct] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: supabaseError } = await supabase
          .from('Habibi')
          .select('*')
          .eq('id', productId)
          .single();

        if (supabaseError) throw supabaseError;

        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('خطا در دریافت اطلاعات محصول');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, supabase]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p>در حال بارگذاری...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 text-center">
        <p>{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center p-4">
        <p>محصول مورد نظر یافت نشد</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{product.title} {product.model} | خرید اسپویلر</title>
        <meta name="description" content={`خرید اسپویلر ${product.title} ${product.model} طرح RC با بهترین کیفیت و قیمت. قابل نصب روی پژو 207. ارسال سریع به سراسر کشور.`} />
        <meta name="keywords" content={`اسپویلر، ${product.title}، ${product.model}، پژو 207، خرید اسپویلر، لوازم جانبی خودرو`} />
      </Head>
      <div className="my-12 grid grid-cols-12 gap-6">
        {/* گالری تصاویر */}
        <div className="col-span-12 lg:col-span-6">
          <div className="h-96 overflow-hidden rounded-lg shadow-md">
            {product.imag ? (
              <Image
                src={product.imag.trim()}
                alt={`${product.title} ${product.model}`}
                width={500}
                height={300}
                style={{ objectFit: 'cover' }}
                className="w-full h-full transition-transform duration-300 hover:scale-105"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span>تصویری موجود نیست</span>
              </div>
            )}
          </div>
        </div>

        {/* توضیحات و اطلاعات محصول */}
        <div dir="rtl" className="col-span-12 lg:col-span-6 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{product.title} {product.model}</h1>
          <p className="text-2xl text-blue-600 font-semibold mb-6">
            {fronNumber(product.price || 0)} هزار تومان
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">توضیحات محصول</h2>
            <p className="text-gray-700 leading-relaxed">
              {/* توضیحات */}
            </p>
          </div>

          {/* بخش تعداد و افزودن به سبد خرید */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <span className="text-lg font-semibold mr-3">تعداد:</span>
              <input
                type="number"
                defaultValue="1"
                min="1"
                className="border rounded-lg w-20 px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <AddCart id={Number(productId)} />
          </div>
        </div>
      </div>
    </>
  );
}
