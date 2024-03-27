"use client";

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname(); // con este es necesario usar el 'use client'
  // el usePathname lo uso para cambiar los links y que se activen de forma dinámica con la ruta -path-
  // console.log(pathName);

  return (
    <Link
      className={`
          ${style.link} 
          ${pathName === path && style["active-link"]}
        `} // se pone entre [] porque lleva el - y si lo dejas sin estos, sería como restar dos variables.
      href={path}
    >
      {text}
    </Link>
  );
};
