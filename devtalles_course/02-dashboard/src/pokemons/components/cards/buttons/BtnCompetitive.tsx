"use client";
import { useAppSelector } from "@/store";
import Link from "next/link";
import { IoGameController, IoGameControllerOutline } from "react-icons/io5";

interface Props {
  id: string;
  name?: string;
}

export const BtnCompetitive = ({ id, name }: Props) => {
  const isCompetitive = useAppSelector(
    (state) => !!state.competitivePokemon[id] // la doble negación es para que sea true or false
  ); // eso esto para ver en el store si hay algún pokemon marcado para competitivo

  // console.log(isCompetitive);

  return (
    <Link
      className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
      href="/dashboard/main"
    >
      {isCompetitive ? (
        <IoGameController className="text-blue-800" size={40} />
      ) : (
        <IoGameControllerOutline className="text-blue-800" size={40} />
      )}
      {/* <IoGameControllerOutline className="text-blue-800" size={40} /> */}
      <section className="pl-3">
        {isCompetitive ? (
          <p className="text-sm font-medium text-gray-800 leading-none">
            Remove to competitive
          </p>
        ) : (
          <p className="text-sm font-medium text-gray-800 leading-none">
            Add to competitive
          </p>
        )}
        {/* <p className="text-sm font-medium text-gray-800 leading-none">
          Add to competitive
        </p> */}
        {/* <p className="text-xs text-gray-500">
                Is this pokemons good for competitive?
              </p> */}
      </section>
    </Link>
  );
};
