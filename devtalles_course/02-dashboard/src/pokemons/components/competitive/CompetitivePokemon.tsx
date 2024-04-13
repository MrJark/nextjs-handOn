"use client";

import { useAppSelector } from "@/store";
import { PokemonGrid } from "../cards/PokemonGrid";
import { useEffect, useState } from "react";
import { NoCompetitivePokemonYet } from "./NoCompetitivePokemonYet";

export const CompetitivePokemon = () => {
  const competitivePokemons = useAppSelector(
    (state) => state.competitivePokemon.competitive
  );
  const inObject = Object.values(competitivePokemons); // para que se haga un objeto de arrays
  // console.log(competitivePokemons);

  const [pokemons, setPokemons] = useState(inObject);

  useEffect(() => {
    setPokemons(inObject);
  }, [inObject]);

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
