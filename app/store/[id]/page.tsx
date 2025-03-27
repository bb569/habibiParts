'use client';

import { DataType } from "../../../components/Product";
import Container from "../../../components/Container";
import AddCart from "@/components/AddCart";
import Head from 'next/head';
import { fronNumber } from "@/app/utils/number";
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
<<<<<<< HEAD
=======
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
>>>>>>> local-backup

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id;
<<<<<<< HEAD
  const [dataBases, setDataBases] = useState<DataType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`http://localhost:8000/datas/${id}`);
      const data = (await res.json()) as DataType;
      setDataBases(data);
    }
    fetchData();
  }, [id]);

  if (!dataBases) {
    return <div>Loading...</div>;
=======
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
          .eq('id', id)
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
  }, [id, supabase]);

  if (loading) {
    return (
      <Container>
        <div className="flex justify-center items-center h-64">
          <p>در حال بارگذاری...</p>
        </div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className="text-red-500 p-4 text-center">
          <p>{error}</p>
        </div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container>
        <div className="text-center p-4">
          <p>محصول مورد نظر یافت نشد</p>
        </div>
      </Container>
    );
>>>>>>> local-backup
  }

  return (
    <>
      <Head>
<<<<<<< HEAD
        <title>{dataBases.title} {dataBases.model} | خرید اسپویلر</title>
        <meta name="description" content={`خرید اسپویلر ${dataBases.title} ${dataBases.model} طرح RC با بهترین کیفیت و قیمت. قابل نصب روی پژو 207. ارسال سریع به سراسر کشور.`} />
        <meta name="keywords" content={`اسپویلر، ${dataBases.title}، ${dataBases.model}، پژو 207، خرید اسپویلر، لوازم جانبی خودرو`} />
=======
        <title>{product.title} {product.model} | خرید اسپویلر</title>
        <meta name="description" content={`خرید اسپویلر ${product.title} ${product.model} طرح RC با بهترین کیفیت و قیمت. قابل نصب روی پژو 207. ارسال سریع به سراسر کشور.`} />
        <meta name="keywords" content={`اسپویلر، ${product.title}، ${product.model}، پژو 207، خرید اسپویلر، لوازم جانبی خودرو`} />
>>>>>>> local-backup
      </Head>
      <Container>
        <div className="my-12 grid grid-cols-12 gap-6">
          {/* گالری تصاویر */}
          <div className="col-span-12 lg:col-span-6">
            <div className="h-96 overflow-hidden rounded-lg shadow-md">
<<<<<<< HEAD
              <Image
                src={dataBases.imag}
                alt={`${dataBases.title} ${dataBases.model}`}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
=======
              {product.imag ? (
                <Image
                  src={product.imag}
                  alt={`${product.title} ${product.model}`}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span>تصویری موجود نیست</span>
                </div>
              )}
>>>>>>> local-backup
            </div>
          </div>

          {/* توضیحات و اطلاعات محصول */}
          <div dir="rtl" className="col-span-12 lg:col-span-6 bg-white p-6 rounded-lg shadow-md">
<<<<<<< HEAD
            <h1 className="text-3xl font-bold mb-4">{dataBases.title} {dataBases.model}</h1>
            <p className="text-2xl text-blue-600 font-semibold mb-6">{fronNumber(dataBases.price)} هزار تومان</p>
=======
            <h1 className="text-3xl font-bold mb-4">{product.title} {product.model}</h1>
            <p className="text-2xl text-blue-600 font-semibold mb-6">
              {fronNumber(product.price || 0)} هزار تومان
            </p>
>>>>>>> local-backup

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">توضیحات محصول</h2>
              <p className="text-gray-700 leading-relaxed">
<<<<<<< HEAD
                در ابتدا اسپویلر {dataBases.title} یا همان بال {dataBases.title}، برای خودروهای مسابقه‌ای و
                اسپرتی استفاده می‌شد، اما در گذر زمان به دلیل تاثیر آیرودینامیکی و
                زیبایی آن، برای اکثر خودروها نیز تولید شد. اسپویلر {dataBases.title} {dataBases.model} طرح RC
                نیز که از مواد درجه یک فایبرگلاس ساخته شده، به عنوان یک آپشن ویژه
                به {dataBases.model} اضافه می‌شود. البته این بال {dataBases.title} روی 207 نیز قابل نصب است.
                این بال {dataBases.title} بصورت خاص برای بدنه پژو {dataBases.model} هاچ بک طراحی شده و کاملا
=======
                در ابتدا اسپویلر {product.title} یا همان بال {product.title}، برای خودروهای مسابقه‌ای و
                اسپرتی استفاده می‌شد، اما در گذر زمان به دلیل تاثیر آیرودینامیکی و
                زیبایی آن، برای اکثر خودروها نیز تولید شد. اسپویلر {product.title} {product.model} طرح RC
                نیز که از مواد درجه یک فایبرگلاس ساخته شده، به عنوان یک آپشن ویژه
                به {product.model} اضافه می‌شود. البته این بال {product.title} روی 207 نیز قابل نصب است.
                این بال {product.title} بصورت خاص برای بدنه پژو {product.model} هاچ بک طراحی شده و کاملا
>>>>>>> local-backup
                فیت با بدنه و بدون تاب خوردگی می‌باشد.
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
              <AddCart id={Number(id)} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}