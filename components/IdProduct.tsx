"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataType } from "./Product";
import Container from "../components/Container";
import Image from 'next/image'; // وارد کردن Image

interface IdProductProps {
  id: number;
  productData: DataType;
}

export default function IdProduct({ id }: IdProductProps) { // حذف qty از props
  const [data, setData] = useState<DataType | null>(null);

  useEffect(() => {
    axios(`http://localhost:8000/datas/${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <div className="my-12 grid grid-cols-12 ">
        <div className="lg:hidden col-span-12 h-80 overflow-hidden">
          <Image // استفاده از Image
            src={data.imag}
            alt="Your Image"
            width={500} // یا مقدار مناسب
            height={320} // یا مقدار مناسب
            layout="responsive"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-150 transform-origin-center"
          />
        </div>
        <div dir="rtl" className="col-span-12 lg:col-span-8 bg-white">
          <div className="text-center border-b border-a">
            <h3 className="text-d text-4xl font-light">{data.title}</h3>
            <p className="text-a py-2 font-light text-xs">{data.price}</p>
          </div>
          <div className=" text-center">
            <p className="text-a">
              در ابتدا اسپویلر {data.title} یا همان بال {data.title}، برای
              خودروهای مسابقه ای و اسپرتی استفاده می شد، اما در گذر زمان به
              دلیل تاثیر آیرودینامیکی و زیبایی آن، برای اکثر خودروها نیز
              تولید شد. اسپویلر {data.title} {data.model} طرح RC نیز که
              از مواد درجه یک فایبرگلاس ساخته شده، به عنوان یک آپشن ویژه
              به {data.model} اضافه می شود. البته این بال {data.title} روی
              207 نیز قابل نصب است. این بال {data.title} بصورت خاص برای
              بدنه پژو {data.model} هاچ بک طراحی شده و کاملا فیت با بدنه و
              بدون تاب خوردگی می باشد.
            </p>
            <div className="flex justify-center mt-5">
              <button className="bg-d w-6 h-6 rounded-md active:border border-a">
                +
              </button>
              <button className="bg-c mx-3 text-b w-36 rounded-md  shadow-sm active:text-b active:bg-c hover:text-c hover:bg-white">
                افزودن به سبد خرید
              </button>
              <button className="bg-r w-6 h-6 rounded-md active:border border-a">
                -
              </button>
            </div>
            <div className="flex justify-center">
              <p className="mt-2 text-a">1 :</p>
              <p className="mt-2 text-d">تعداد سفارشات شما</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex col-span-4 h-80 overflow-hidden">
          <Image // استفاده از Image
            src={data.imag}
            alt="Your Image"
            width={500} // یا مقدار مناسب
            height={320} // یا مقدار مناسب
            layout="responsive"
            objectFit="cover"
            className="w-full h-full transition-transform duration-300 hover:scale-150 transform-origin-center"
          />
        </div>
      </div>
    </Container>
  );
}