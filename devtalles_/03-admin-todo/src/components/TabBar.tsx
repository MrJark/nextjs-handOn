"use client";

import {setCookie} from "cookies-next"; //! SOLO se puede desde el client side
import {useRouter} from "next/navigation";
import {useState} from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

const tabOptions = [1, 2, 3, 4, 5];
const length = tabOptions.length; // a veces con la opción de tabOptions.length no funciona
console.log(length);

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  currentTab = 1,
  tabOptions = [1, 2, 3, 4, 5],
}: Props) => {
  const [selected, setSelected] = useState(currentTab);
  const router = useRouter();

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", tab.toString()); // para tener la cookie
    router.refresh();
  };

  return (
    <div
      className={`
      grid w-full space-x-2 rounded-xl bg-gray-200 p-2
      grid-cols-${length}
      ${"grid-cols-" + length}
    `}>
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
            className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            {n}
          </label>
        </div>
      ))}
    </div>
  );
};
