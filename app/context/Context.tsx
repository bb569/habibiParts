"use client";
import { createContext, useContext, useState } from "react";

type CartProviderProps = {
  children: React.ReactNode;
};

export type CartItem = { // اصلاح: اضافه کردن export
  id: number;
  qty: number;
};

type CartContextType = {
  cartItems: CartItem[];
  handleQty: (id: number) => void;
  deHandleQty: (id: number) => void;
  getQty: (id: number) => number;
  cartQty: number;
  allDelet: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const FunContext = () => { // اصلاح: تغییر نام هوک به FunContext
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("FunContext must be used within a CartProvider"); // اصلاح پیام خطا
  }
  return context;
};

export default function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  const cartQty = cartItems.reduce((total, item) => total + item.qty, 0);

  const handleQty = (id: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...currentItems, { id, qty: 1 }];
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
    });
  };

  const deHandleQty = (id: number) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === id);
      if (existingItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  };

  const allDelet = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const value: CartContextType = {
    cartItems,
    handleQty,
    deHandleQty,
    getQty,
    allDelet,
    cartQty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}