'use client';
import { DataType } from '../../components/Product'; // حذف Product از ایمپورت
import Container from '../../components/Container';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fronNumber } from '../utils/number';
import Image from 'next/image'; // اضافه کردن ایمپورت Image

export default function ProductsPage() {
    const [dataBases, setDataBases] = useState<DataType[]>([]);
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [modelFilter, setModelFilter] = useState<string>('');
    const [dataFilter, setDataFilter] = useState<string>('');
    const [sortFilter, setSortFilter] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9; // تعداد آیتم‌ها در هر صفحه

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:8000/datas');
            const data = (await res.json()) as DataType[];
            setDataBases(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        let results = dataBases;

        if (searchTerm) {
            results = results.filter((db) => db.title.includes(searchTerm));
        }

        if (modelFilter) {
            results = results.filter((db) => db.model === modelFilter);
        }

        if (dataFilter) {
            results = results.filter((db) => db.data === dataFilter);
        }

        if (sortFilter === 'expensive') {
            results.sort((a, b) => b.price - a.price);
        } else if (sortFilter === 'cheap') {
            results.sort((a, b) => a.price - b.price);
        } else if (sortFilter === 'popular') {
            results.sort((a, b) => b.order - a.order);
        }

        setFilteredData(results);
        setCurrentPage(1); // وقتی فیلترها تغییر می‌کنند، به صفحه اول برگردید
    }, [searchTerm, modelFilter, dataFilter, sortFilter, dataBases]);

    const availableModels = [...new Set(dataBases.map((db) => db.model))];
    const availableData = [...new Set(dataBases.map((db) => db.data))];

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Container>
            <h4 className="py-5 text-d text-right">محصولات</h4>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 p-4 bg-gray-50 rounded-lg shadow-sm">
                    <input
                        type="text"
                        placeholder="جستجو..."
                        className="border p-2 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
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
                    <select
                        className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        value={dataFilter}
                        onChange={(e) => setDataFilter(e.target.value)}
                    >
                        <option value="">همه داده‌ها</option>
                        {availableData.map((data) => (
                            <option key={data} value={data}>
                                {data}
                            </option>
                        ))}
                    </select>
                    <select
                        className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={sortFilter}
                        onChange={(e) => setSortFilter(e.target.value)}
                    >
                        <option value="">مرتب‌سازی بر اساس</option>
                        <option value="expensive">گران‌ترین</option>
                        <option value="cheap">ارزان‌ترین</option>
                        <option value="popular">پرفروش‌ترین</option>
                    </select>
                </div>

                <div className="md:w-3/4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 p-4">
                    {currentItems.map((db) => (
                        <Link key={db.id} href={`/store/${db.id}`}>
                            <div className="h-full bg-white flex flex-col shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300">
                                <Image // استفاده از کامپوننت Image
                                    className="w-full h-48 object-cover"
                                    src={db.imag}
                                    alt={db.title}
                                    width={500} // یا مقدار مناسب دیگر
                                    height={300} // یا مقدار مناسب دیگر
                                    layout="responsive" // برای پاسخگو کردن تصویر
                                    objectFit="cover" // برای پوشش کامل فضای موجود
                                    loading="lazy"
                                />
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-gray-800 mb-2">{db.title}</h3>
                                    <div className="flex items-center mb-2">
                                        <p className="text-sm text-gray-600">سفارشات: {db.order}</p>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-2">قیمت: {fronNumber(db.price)} هزارتومن</p>
                                    <p className="text-sm text-gray-600">{db.model}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
                    >
                        قبلی
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 mx-1 rounded-lg ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
                    >
                        بعدی
                    </button>
                </div>
            )}
        </Container>
    );
}