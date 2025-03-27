import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
      <div className="container mx-auto px-4 py-8">

      {/* بخش بنر */}
      <section className="mb-8">
        <div className="bg-gray-200 rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4">
            به فروشگاه لوازم یدکی خودرو ما خوش آمدید
          </h1>
          <p className="text-gray-700">
            ما طیف گسترده‌ای از قطعات با کیفیت بالا را برای انواع خودروها ارائه
            می‌دهیم.
          </p>
          <Link href={"/store"}>
            {" "}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
              مشاهده محصولات
            </button>
          </Link>
        </div>
      </section>

      {/* بخش دسته‌بندی‌ها */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">دسته‌بندی‌های محبوب</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">قطعات موتور</h3>
            <p className="text-gray-600">انواع قطعات موتور از برندهای معتبر.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">قطعات بدنه</h3>
            <p className="text-gray-600">قطعات بدنه با کیفیت و مقاوم.</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold mb-2">لوازم جانبی</h3>
            <p className="text-gray-600">
              انواع لوازم جانبی برای ارتقای خودرو شما.
            </p>
          </div>
        </div>
      </section>

      {/* بخش محصولات ویژه */}
      <section>
        <h2 className="text-2xl font-bold mb-4">محصولات ویژه</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* کارت محصول 1 */}
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
            <Image // استفاده از کامپوننت Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzV8LMjaNtOXrQaQ8ToYosw6zS_I_86Kjaqg&s"
              alt="نام محصول"
              width={500} // تعیین عرض تصویر
              height={300} // تعیین ارتفاع تصویر
              className="mb-4 w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">نام محصول</h3>
            <p className="text-gray-600">توضیحات کوتاه محصول.</p>
            <p className="text-lg font-bold text-blue-500">100,000 تومان</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
              افزودن به سبد خرید
            </button>
          </div>
          {/* کارت محصول 2 */}
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
            <Image // استفاده از کامپوننت Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzV8LMjaNtOXrQaQ8ToYosw6zS_I_86Kjaqg&s"
              alt="نام محصول"
              width={500} // تعیین عرض تصویر
              height={300} // تعیین ارتفاع تصویر
              className="mb-4 w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">نام محصول</h3>
            <p className="text-gray-600">توضیحات کوتاه محصول.</p>
            <p className="text-lg font-bold text-blue-500">100,000 تومان</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
              افزودن به سبد خرید
            </button>
          </div>
          {/* کارت محصول 3 */}
          <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300">
            <Image // استفاده از کامپوننت Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzV8LMjaNtOXrQaQ8ToYosw6zS_I_86Kjaqg&s"
              alt="نام محصول"
              width={500} // تعیین عرض تصویر
              height={300} // تعیین ارتفاع تصویر
              className="mb-4 w-full h-48 object-cover rounded-lg"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold mb-2">نام محصول</h3>
            <p className="text-gray-600">توضیحات کوتاه محصول.</p>
            <p className="text-lg font-bold text-blue-500">100,000 تومان</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300">
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* بخش اطلاعات تماس */}
            <div>
              <h3 className="text-lg font-semibold mb-2">اطلاعات تماس</h3>
              <p>آدرس: خیابان اصلی، پلاک 123</p>
              <p>تلفن: 021-12345678</p>
              <p>ایمیل: info@autoparts.com</p>
            </div>

            {/* بخش لینک‌های مفید */}
            <div>
              <h3 className="text-lg font-semibold mb-2">لینک‌های مفید</h3>
              <ul className="list-none">
                <li>
                  <a
                    href="/about"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    درباره ما
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    سوالات متداول
                  </a>
                </li>
              </ul>
            </div>

            {/* بخش شبکه‌های اجتماعی */}
            <div>
              <h3 className="text-lg font-semibold mb-2">شبکه‌های اجتماعی</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  {/* آیکون فیسبوک */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-3-3v6m-3 2h6a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h4M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  {/* آیکون اینستاگرام */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 01-2.5 2.5H10A2.5 2.5 0 017.5 13.5V12m-6.5 2.5H6m0 0v-6m0 6L14 3m-9 14l12-12M2 10h12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p>
              © {new Date().getFullYear()} فروشگاه لوازم یدکی خودرو. تمامی حقوق
              محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
