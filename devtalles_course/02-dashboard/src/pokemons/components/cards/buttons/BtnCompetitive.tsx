"use client";
import { useAppSelector } from "@/store";
import Link from "next/link";
import { IoGameControllerOutline } from "react-icons/io5";

interface Props {}

export const BtnCompetitive = () => {
  const isCompetitive = useAppSelector((state) => state.competitivePokemon); // eso esto para ver en el store si hay algún pokemon marcado para competitivo

  // console.log(isCompetitive);

  return (
    <Link
      className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
      href="/dashboard/main"
    >
      <IoGameControllerOutline className="text-blue-800" size={40} />
      {/* <IoGameControllerSharp className="text-blue-800" size={40} /> */}
      <div className="pl-3">
        <p className="text-sm font-medium text-gray-800 leading-none">
          Add to competitive
        </p>
        {/* <p className="text-xs text-gray-500">
                Is this pokemons good for competitive?
              </p> */}
      </div>
    </Link>
  );
};
