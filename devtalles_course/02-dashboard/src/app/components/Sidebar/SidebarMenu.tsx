"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
  className?: string;
}

export const SidebarMenu = ({
  icon,
  path,
  subtitle,
  title,
  className = "w-full mb-3 transition-all rounded-lg px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 ease-linear duration-300",
}: Props) => {
  const currentPath = usePathname();
  // console.log({ currentPath, path });

  return (
    <Link
      href={path}
      className={`${className}
      ${currentPath === path ? "bg-blue-800" : "bg-slate-800"}`}
    >
      <div>{icon}</div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">
          {subtitle}
        </span>
      </div>
    </Link>
  );
};
