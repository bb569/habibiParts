// components/Search.tsx
"use client";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/search?q=${searchTerm}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="bg-b flex w-full lg:basis-8/12 m-2 items-center h-20 md:h-2/3 rounded-md border border-e">
      <img src="/search.png" alt="Search Icon" className="h-5" />
      <input
        className="w-full font-light text-a"
        type="text"
        placeholder="جستوجوی محصول.مارک یا قطعه"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={handleSearch} className="px-4">جستجو</button>
    </div>
  );
}