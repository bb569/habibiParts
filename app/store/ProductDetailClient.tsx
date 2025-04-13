"use client";

import { useState, useEffect } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from 'next/navigation';

interface Product {
  id: string;
  imag: string;
  title: string;
  model: string;
  price: number;
  description?: string;
  stars: number;
  order?: number;
  // سایر فیلدهای موجود در جدول Habibi
}

export default function ProductDetailClient({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    fetchProduct();
  }, [params.productId]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      setError(null);

      // 1. استفاده از نام صحیح جدول (Habibi)
      const { data, error: supabaseError } = await supabase
        .from('Habibi') // تغییر به نام جدول شما
        .select('*')
        .eq('id', params.productId)
        .single();

      if (supabaseError) {
        throw new Error('خطا در دریافت اطلاعات از سرور: ' + supabaseError.message);
      }

      if (!data) {
        throw new Error('محصولی با این شناسه در جدول Habibi یافت نشد');
      }

      setProduct(data);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'خطای ناشناخته در دریافت اطلاعات محصول');
      console.error('جزئیات خطا:', err);
    } finally {
      setLoading(false);
    }
  };  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 1;
    setQuantity(Math.max(1, Math.min(10, value)));
  };

  if (loading) {
    return (
      <div className="p-4 text-center">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-full h-64 bg-gray-200 rounded"></div>
          <div className="w-3/4 h-6 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-6 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 max-w-md mx-auto text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          بازگشت به صفحه اصلی
        </button>
      </div>
    );
  }

  if (!product) {
    return <div className="p-4 text-center">محصولی یافت نشد</div>;
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* بخش تصویر محصول */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
          {product.imag ? (
            <img
              src={product.imag}
              alt={product.title}
              className="w-full h-auto object-contain max-h-96"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder-product.png';
              }}
            />
          ) : (
            <div className="w-full h-96 flex items-center justify-center bg-gray-100 text-gray-400">
              تصویری موجود نیست
            </div>
          )}
        </div>

        {/* بخش اطلاعات محصول */}
        <div dir="rtl" className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.title}</h1>
          {product.model && <p className="text-lg text-gray-600 mt-2">{product.model}</p>}
          
          <div className="flex items-center">
            {product.stars && (
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < product.stars ? 'fill-current' : 'stroke-current fill-none'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            )}
            {product.order && (
              <span className="text-sm text-gray-500 mr-2">({product.order} سفارش)</span>
            )}
          </div>catch

          <div className="py-4 border-t border-b border-gray-200">
            <div className="text-2xl font-semibold text-blue-600">
              {product.price?.toLocaleString('fa-IR')} تومان
            </div>
          </div>

          {product.description && (
            <div className="pt-4">
              <h2 className="text-lg font-semibold mb-3 text-gray-800">توضیحات محصول</h2>
              <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-gray-200 gap-4">
            <div className="flex items-center">
              <span className="ml-3 text-gray-700">تعداد:</span>
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 px-2 py-1 border rounded text-center"
              />
            </div>
            <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors w-full sm:w-auto">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  );}