// gist de fernando
import { titleFont } from "@/config/fonts";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <header>
        <h1 className={`${titleFont.className} text-4xl mb-5`}>New Account</h1>
      </header>

      <article className="flex flex-col">
        <label htmlFor="email">Full Name</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black font-medium"
          type="text"
        />
        <label htmlFor="email">Email Address</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black font-medium"
          type="email"
        />

        <label htmlFor="email">Password</label>
        <input
          className="px-5 py-2 border bg-gray-200 rounded mb-5 text-black font-medium"
          type="password"
        />

        <button className="btn-primary">Create Account</button>

        {/* divisor l ine */}
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>

        <Link href="/auth/login" className="btn-secondary text-center">
          Log In
        </Link>
      </article>
    </section>
  );
}
