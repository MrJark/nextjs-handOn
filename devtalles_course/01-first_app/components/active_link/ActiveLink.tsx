"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import style from "./ActiveLink.module.css";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();
  console.log({ pathName, path });

  return (
    <Link
      className={`ml-2 ${
        pathName === path
          ? "text-pink-600 transition-all"
          : "text-white hover:underline hover:text-pink-600 transition-all"
      }`}
      // trabajar con lo de arriba y de abajo, es lo mismo, solo que esto siguiente tienes que crear el .module.css
      // className={`ml-2 ${style.link} ${
      //   pathName === path && style["active-link"]
      // }`}
      href={path}
    >
      {text}
    </Link>
  );
};
