"use client";
import { DataType } from "../../components/Product";
import Container from "../../components/Container";
import { useState, useEffect, useMemo } from "react";
import { FunContext } from "../context/Context";
import ShopingBasket from "@/components/ShopingBasket";
import axios from "axios";
import { fronNumber } from "../utils/number";

export default function Cart() {
  const [products, setProducts] = useState<DataType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modelFilter, setModelFilter] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<DataType[]>("http://localhost:8000/datas");
        setProducts(response.data);
      } catch (err) {
        setError("خطا در دریافت داده‌ها");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const availableModels = useMemo(
    () => [...new Set(products.map((product) => product.model))],
    [products]
  );

  const { cartItems } = FunContext();

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total: number, item) => {
      const product = products.find(
        (product) => product.id.toString() === item.id.toString()
      );
      return total + (product?.price || 0) * item.qty;
    }, 0);
  }, [cartItems, products]);

  if (loading) {
    return <Container>در حال بارگذاری...</Container>;
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      <h4 className="py-5 text-d text-right">لوازم جانبی شاتون</h4>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 p-4">
          <input
            type="text"
            placeholder="جستجو..."
            className="border p-2 w-full mb-4"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border p-2 w-full"
            value={modelFilter}
            onChange={(e) => setModelFilter(e.target.value)}
          >
            <option value="">همه مدل‌ها</option>
            {availableModels.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
        <div className="md:w-3/4 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 cursor-pointer">
          {cartItems.map((item) => (
            <ShopingBasket key={item.id.toString()} {...item} />
          ))}
        </div>
      </div>
      <div>
        <p>قیمت کل: {fronNumber(totalPrice)}</p>
      </div>
    </Container>
  );
}