"use client";

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import Link from "next/link";

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUIStore((state) => state.openSideMenu); // si usamos un hook tiene que ser useClient

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>
            Tesla | Shop
          </span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          href="/category/men"
          className="m-2 p-2 rounded-md transition-all text-center hover:bg-gray-800"
        >
          Men
        </Link>
        <Link
          href="/category/women"
          className="m-2 p-2 rounded-md transition-all text-center hover:bg-gray-800"
        >
          Women
        </Link>
        <Link
          href="/category/kid"
          className="m-2 p-2 rounded-md transition-all text-center hover:bg-gray-800"
        >
          Kids
        </Link>
      </div>

      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-600 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          onClick={() => openMenu()}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-700"
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
