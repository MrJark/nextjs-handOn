"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "../cards/PokemonGrid";
import { useState } from "react";
import { NoCompetitivePokemonYet } from "./NoCompetitivePokemonYet";

export const CompetitivePokemon = () => {
  const competitivePokemons = useAppSelector(
    (state) => state.competitivePokemon
  );
  const inObject = Object.values(competitivePokemons);
  // console.log(competitivePokemons);

  const [pokemons, setPokemons] = useState(inObject);

  // para que funcione, pokemons está esperando un arrego de SimplePokemon y en seco, competitivePokemon son arrays, tanto como pokemons tengas en competitivo o en duro, por tanto haciendo Object.values( competitivePokemon ) conviertes los arrays en un objeto de arrays lo cual sí es valido
  return (
    <>
      {pokemons.length === 0 ? (
        <NoCompetitivePokemonYet />
      ) : (
        <PokemonGrid pokemons={pokemons} />
      )}
    </>
  );
};
