'use client';
<<<<<<< HEAD
import { DataType } from '../../components/Product'; // حذف Product از ایمپورت
=======
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { DataType } from '../../components/Product';
>>>>>>> local-backup
import Container from '../../components/Container';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { fronNumber } from '../utils/number';
<<<<<<< HEAD
import Image from 'next/image'; // اضافه کردن ایمپورت Image
=======
import Image from 'next/image';
>>>>>>> local-backup

export default function ProductsPage() {
    const [dataBases, setDataBases] = useState<DataType[]>([]);
    const [filteredData, setFilteredData] = useState<DataType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [modelFilter, setModelFilter] = useState<string>('');
    const [dataFilter, setDataFilter] = useState<string>('');
    const [sortFilter, setSortFilter] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
<<<<<<< HEAD
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
=======
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const itemsPerPage = 9;

    const supabase = createClientComponentClient();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                const { data, error: supabaseError } = await supabase
                    .from('Habibi')
                    .select('*');
                
                if (supabaseError) {
                    throw new Error(supabaseError.message);
                }
                
                setDataBases(data || []);
                setFilteredData(data || []);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [supabase]);

    useEffect(() => {
        let results = [...dataBases];

        if (searchTerm) {
            results = results.filter(db => 
                db.title?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (modelFilter) {
            results = results.filter(db => db.model === modelFilter);
        }

        if (dataFilter) {
            results = results.filter(db => db.data === dataFilter);
        }

        if (sortFilter === 'expensive') {
            results.sort((a, b) => (b.price || 0) - (a.price || 0));
        } else if (sortFilter === 'cheap') {
            results.sort((a, b) => (a.price || 0) - (b.price || 0));
        } else if (sortFilter === 'popular') {
            results.sort((a, b) => (b.order || 0) - (a.order || 0));
        }

        setFilteredData(results);
        setCurrentPage(1);
    }, [searchTerm, modelFilter, dataFilter, sortFilter, dataBases]);

    const availableModels = [...new Set(dataBases.map(db => db.model).filter(Boolean))];
    const availableData = [...new Set(dataBases.map(db => db.data).filter(Boolean))];

    // Pagination calculations
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (pageNumber: number) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    if (isLoading) {
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
                <div className="text-red-500 p-4">
                    <p>خطا در دریافت داده‌ها: {error}</p>
                </div>
            </Container>
        );
    }

    return (
        <Container>
            <h4 className="py-5 text-d text-right">محصولات</h4>
            
            <div className="flex flex-col md:flex-row gap-4">
                {/* Filters Sidebar */}
>>>>>>> local-backup
                <div className="md:w-1/4 p-4 bg-gray-50 rounded-lg shadow-sm">
                    <input
                        type="text"
                        placeholder="جستجو..."
                        className="border p-2 w-full mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
<<<<<<< HEAD
=======
                    
>>>>>>> local-backup
                    <select
                        className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        value={modelFilter}
                        onChange={(e) => setModelFilter(e.target.value)}
                    >
                        <option value="">همه مدل‌ها</option>
<<<<<<< HEAD
                        {availableModels.map((model) => (
                            <option key={model} value={model}>
                                {model}
                            </option>
                        ))}
                    </select>
=======
                        {availableModels.map(model => (
                            <option key={model} value={model}>{model}</option>
                        ))}
                    </select>
                    
>>>>>>> local-backup
                    <select
                        className="border p-2 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                        value={dataFilter}
                        onChange={(e) => setDataFilter(e.target.value)}
                    >
                        <option value="">همه داده‌ها</option>
<<<<<<< HEAD
                        {availableData.map((data) => (
                            <option key={data} value={data}>
                                {data}
                            </option>
                        ))}
                    </select>
=======
                        {availableData.map(data => (
                            <option key={data} value={data}>{data}</option>
                        ))}
                    </select>
                    
>>>>>>> local-backup
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

<<<<<<< HEAD
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
=======
                {/* Products Grid */}
                <div className="md:w-3/4">
                    {currentItems.length > 0 ? (
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
                            {currentItems.map(db => (
                                <Link key={db.id} href={`/store/${db.id}`} passHref>
                                    <div className="h-full bg-white flex flex-col shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300 cursor-pointer">
                                        {db.imag && (
                                            <div className="relative h-48 w-full">
                                                <Image
                                                    src={db.imag}
                                                    alt={db.title || 'Product image'}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    priority={false}
                                                />
                                            </div>
                                        )}
                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                                {db.title || 'بدون عنوان'}
                                            </h3>
                                            <div className="flex items-center mb-2">
                                                <p className="text-sm text-gray-600">
                                                    سفارشات: {db.order || 0}
                                                </p>
                                            </div>
                                            <p className="text-sm text-gray-700 mb-2">
                                                قیمت: {fronNumber(db.price || 0)} هزارتومن
                                            </p>
                                            <p className="text-sm text-gray-600">{db.model}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <p>محصولی یافت نشد</p>
                        </div>
                    )}

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
                            >
                                قبلی
                            </button>
                            
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                let pageNum;
                                if (totalPages <= 5) {
                                    pageNum = i + 1;
                                } else if (currentPage <= 3) {
                                    pageNum = i + 1;
                                } else if (currentPage >= totalPages - 2) {
                                    pageNum = totalPages - 4 + i;
                                } else {
                                    pageNum = currentPage - 2 + i;
                                }
                                
                                return (
                                    <button
                                        key={pageNum}
                                        onClick={() => handlePageChange(pageNum)}
                                        className={`px-4 py-2 mx-1 rounded-lg ${
                                            currentPage === pageNum ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                        }`}
                                    >
                                        {pageNum}
                                    </button>
                                );
                            })}
                            
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 mx-1 bg-gray-200 rounded-lg disabled:opacity-50"
                            >
                                بعدی
                            </button>
                        </div>
                    )}
                </div>
            </div>
>>>>>>> local-backup
        </Container>
    );
}