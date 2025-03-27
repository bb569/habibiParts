"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddCart from "./AddCart";
import axios from "axios";
import { DataType } from "./Product";
type cartdata = {
    id: number;
    qty: number;
  };

function ShopingBasket({id,qty}:cartdata) {
  const [data, setdata] = useState({} as DataType);
  useEffect(() => {
    axios(`http://localhost:8000/datas/${id}`).then(res=>{
      const {data} = res
      setdata(data)
    })
  }, []);
  return (
    <div>
      <div
        key={1}
        className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden"
      >
        <Link href={`/store/${id}`}>
          <img
            className="w-full h-48 object-cover"
            src={data.imag}
          />
        </Link>
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">{data.title}</h3>
          <p className="text-gray-600 mb-2">سفارشات:{qty}</p>
          <p className="text-gray-800 font-semibold">
            قیمت: {data.price} هزارتومن
          </p>
          <p className="text-gray-600">{data.model}</p>
          <div className="mt-4">
            <AddCart id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopingBasket;
