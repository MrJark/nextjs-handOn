"use client";

import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleCompetitive } from "@/store/pokemon/pokemonSlice";
import { IoGameController, IoGameControllerOutline } from "react-icons/io5";

interface Props {
  // id: string;
  // name?: string;
  pokemon: SimplePokemon;
}

export const BtnCompetitive = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isCompetitive = useAppSelector(
    (state) => !!state.competitivePokemon.competitive[id] // la doble negación es para que sea true or false
  ); // eso esto para ver en el store si hay algún pokemon marcado para competitivo

  // console.log(isCompetitive);
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch(toggleCompetitive(pokemon)); // la ! es para decirle que siempre va a venir
    // console.log("click", id);
  };

  return (
    <button
      onClick={onToggle}
      className="px-4 py-2 hover:bg-gray-100 flex items-center w-full justify-center cursor-pointer"
    >
      {isCompetitive ? (
        <IoGameController className="text-blue-800" size={40} />
      ) : (
        <IoGameControllerOutline className="text-blue-800" size={40} />
      )}{" "}
      <div className="pl-3">
        {isCompetitive ? (
          <p className="text-sm font-medium text-gray-800 leading-none">
            Remove from competitive
          </p>
        ) : (
          <p className="text-sm font-medium text-gray-800 leading-none">
            Add to competitive
          </p>
        )}
      </div>
    </button>
  );
};
