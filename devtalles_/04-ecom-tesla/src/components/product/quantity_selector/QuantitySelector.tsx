"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [count, setCount] = useState(0);

  const onQuantityChange = (value: number) => {
    if (count + value <= 0 || count + value > 5) return;
    setCount(count + value);
  };
  return (
    <div className="flex">
      <button onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline
          size={30}
          className="hover:rotate-180 hover:text-red-500 transition-all duration-300"
        />
      </button>
      <span className="w-20 mx-1 px-2 text-center">{count}</span>
      <button onClick={() => onQuantityChange(1)}>
        <IoAddCircleOutline
          size={30}
          className="hover:rotate-180 hover:text-blue-500 transition-all duration-300"
        />
      </button>
    </div>
  );
};
