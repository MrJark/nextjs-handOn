import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyCart() {
  return (
    <main className="grid grid-cols-1 items-center h-[700px]">
      <section className="flex flex-row items-center justify-center">
        <div className="relative mr-2">
          <span className="absolute text-lg flex items-center justify-center rounded-full px-2 font-bold -top-3 right-3 bg-blue-600 text-white">
            0
          </span>
          <IoCartOutline size={60} className="mx-5" />
        </div>
        <div className="grid">
          <h1 className="text-xl font-medium">Your cart is void</h1>
          <Link
            href="/"
            className="text-blue-500 text-4xl font-medium underline"
          >
            Return
          </Link>
        </div>
      </section>
    </main>
  );
}
