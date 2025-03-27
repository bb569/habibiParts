'use client';
import { DataType } from "../Product";
import Container from "../Container";
import Link from "next/link";
import { useState, useEffect } from 'react';
import Image from 'next/image'; // وارد کردن Image

export default function Motors() {
  const [dataBases, setDataBases] = useState<DataType[]>([]);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [modelFilter, setModelFilter] = useState<string>('');

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:8000/datas");
      const data = (await res.json()) as DataType[];
      setDataBases(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    let results = dataBases;
    // فیلتر کردن برای "موتور"
    results = results.filter(db => db.data === "موتور");

    if (searchTerm) {
      results = results.filter(db => db.title.includes(searchTerm));
    }
    if (modelFilter) {
      results = results.filter(db => db.model === modelFilter);
    }
    setFilteredData(results);
  }, [searchTerm, modelFilter, dataBases]);

  // استخراج مدل‌های موجود بر اساس محصولات فیلتر شده اولیه
  const availableModels = [...new Set(dataBases.filter(db => db.data === "موتور").map(db => db.model))];

  return (
    <Container>
      <h4 className="py-5 text-d text-right">لوازم جانبی زغال دینام</h4>
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
            {availableModels.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <div className="md:w-3/4 grid lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 cursor-pointer">
          {filteredData.map((db) => (
            <Link key={db.id} href={`/store/${db.id}`}>
              <div className="h-64 bg-white flex flex-col shadow-md hover:shadow-2xl">
                <Image // استفاده از کامپوننت Image
                  src={db.imag}
                  alt={db.title}
                  width={200} // یا مقدار مناسب دیگر
                  height={120} // یا مقدار مناسب دیگر
                  layout="responsive" // برای پاسخگو کردن تصویر
                  objectFit="cover" // برای پوشش کامل فضای موجود
                  className="w-full h-1/2"
                />
                <h3 className="my-3 text-d font-bold">{db.title}</h3>
                <div className="flex items-center">
                  <p className="text-a ml-2">سفارشات:{db.order}</p>
                </div>
                <p className="text-e font-sans text-sm">قیمت {db.price} هزارتومن</p>
                <p className="text-a font-sans">{db.model}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}