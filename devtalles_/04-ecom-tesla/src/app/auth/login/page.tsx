// gist de fernando
import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function LogInPage() {
  return (
    <section className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <header>
        <h1 className={`${titleFont.className} text-4xl mb-5`}>Log In</h1>
      </header>

      <article className="flex flex-col">
        <label htmlFor="email">Email address</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black font-medium"
          type="email"
        />

        <label htmlFor="email">Password</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black font-medium"
          type="password"
        />

        <button className="btn-primary">Log In</button>

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/new-account" className="btn-secondary text-center">
          Create new account
        </Link>
      </article>
    </section>
  );
}
