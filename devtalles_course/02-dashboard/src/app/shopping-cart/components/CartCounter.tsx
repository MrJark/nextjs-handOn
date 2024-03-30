"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [count, setCount] = useState(value);

  return (
    <section className="grid place-items-center">
      <span className="text-9xl">{count}</span>
      <section className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="flex items-center justify-center p-2 rounded-xl border bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 transition-all w-[100px] "
        >
          +1
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="flex items-center justify-center p-2 rounded-xl border bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 transition-all w-[100px] "
        >
          -1
        </button>
      </section>
    </section>
  );
};
