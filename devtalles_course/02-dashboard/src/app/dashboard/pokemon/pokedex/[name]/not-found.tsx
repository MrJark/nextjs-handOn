import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-0 h-full w-full flex flex-col justify-center items-center bg-[#181a1f]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#ff3ea5] px-2 text-lg rounded rotate-12 absolute">
        Pokemon Not Found
      </div>
      <button className="mt-5">
        <Link
          href="/dashboard/pokemon"
          className="relative inline-block text-sm font-medium text-[#ff3ea5] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#ff3ea5] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1a1c22] border border-current">
            Go Pokedex
          </span>
        </Link>
      </button>
    </main>
  );
}
