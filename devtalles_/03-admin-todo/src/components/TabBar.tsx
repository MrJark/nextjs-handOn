"use client";

import { setCookie } from "cookies-next"; //! SOLO se puede desde el client side
import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

const tabOptions = [1, 2, 3, 4, 5];

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4],
}: Props) => {
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", tab.toString()); // para tener la cookie
  };

  return (
    <div
      className={`
      grid w-full space-x-2 rounded-xl bg-gray-200 p-2
      grid-cols-${tabOptions.length}
    `}
    >
      {tabOptions.map((n) => (
        <div key={n}>
          <input
            checked={selected === n}
            onChange={() => {}} // en react, como buena práctica, necesitas este onChange para controlarlo aunque no lo hagas desde aquí como es el caso
            type="radio"
            id={n.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(n)}
            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
          >
            {n}
          </label>
        </div>
      ))}
    </div>
  );
};