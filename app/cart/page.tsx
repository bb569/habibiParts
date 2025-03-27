"use client";
import { DataType } from "../../components/Product";
import Container from "../../components/Container";
import { useState, useEffect } from "react";
import { FunContext } from "../context/Context";
import ShopingBasket from "@/components/ShopingBasket";
import axios from "axios";
import { fronNumber } from "../utils/number";

export default function Cart() {
  const [dataBases, setDataBases] = useState<DataType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modelFilter, setModelFilter] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8000/datas`);
      const data = (await res.json()) as DataType[];
      setDataBases(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    // let results = dataBases; // حذف این خط
    if (searchTerm) {
      dataBases.filter((db) => db.title.includes(searchTerm));
    }
    if (modelFilter) {
      dataBases.filter((db) => db.model === modelFilter);
    }
  }, [searchTerm, modelFilter, dataBases]);

  const availableModels = [...new Set(dataBases.map((db) => db.model))];

  const { cartItems } = FunContext();
  const [data, setdata] = useState<DataType[]>([]);
  useEffect(() => {
    axios(`http://localhost:8000/datas`).then((res) => {
      const { data } = res;
      setdata(data);
    });
  }, []);
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
            <ShopingBasket key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div>
        <p>
          قیمت کل:
          {fronNumber(
            cartItems.reduce((total, item) => {
              const newData = data.find(
                (product) => parseInt(product.id) == item.id
              );
              return total + (newData?.price || 0) * item.qty;
            }, 0)
          )}
        </p>
      </div>
    </Container>
  );
}