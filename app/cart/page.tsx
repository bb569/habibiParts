"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    // بارگذاری سبد خرید از localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // محاسبه مجموع قیمت سبد خرید
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // حذف یک آیتم از سبد خرید
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // افزایش تعداد یک آیتم در سبد خرید
  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        item.quantity++;
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // کاهش تعداد یک آیتم در سبد خرید
  const decreaseQuantity = (id: string) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        item.quantity--;
      }
      return item;
    }).filter(item => item.quantity > 0); // حذف آیتم‌هایی که تعدادشان به 0 رسید
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // اگر سبد خرید خالی است
  if (cart.length === 0) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-2xl font-semibold">سبد خرید شما خالی است</h2>
        <button
          onClick={() => router.push('/')}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          ادامه خرید
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">سبد خرید شما</h1>
      <div className="space-y-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/placeholder-product.png';
                }}
              />
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">تعداد: {item.quantity}</p>
                <p className="text-sm text-gray-500">{item.price.toLocaleString('fa-IR')} تومان</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                -
              </button>
              <button
                onClick={() => increaseQuantity(item.id)}
                className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">مجموع: {totalPrice.toLocaleString('fa-IR')} تومان</h2>
        <button
          onClick={() => router.push('/checkout')}
          className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          ادامه به تسویه حساب
        </button>
      </div>
    </div>
  );
}
