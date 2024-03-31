import { CartCounter } from "@/shopping-cart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Counter Page",
  description: "Counter Page",
};

export default function Counter() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <section className="grid place-items-center">
        <h1 className="text-3xl text-blue-600 mb-3 font-bold">Counter page</h1>
        <span className="mt-2 text-slate-600 text-xl">Products in cart</span>
      </section>
      <CartCounter />
    </main>
  );
}
