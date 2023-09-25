"use client";

import { useAppSelector } from "@/src/store";
import { PokemonGrid } from "./PokemonGrid";
import { useEffect, useState } from "react";
import { NoFav } from "./NoFavPokemons";

export const FavPokemons = () => {
  const favPokemons = useAppSelector((state) => Object.values(state.pokemons.fav));
  // console.log({favPokemons});
  // const [pokemons, setPokemons] = useState(favPokemons);

  // useEffect(() => {
  //   setPokemons( favPokemons )
  // }, [favPokemons]);

  return (
    // <PokemonGrid pokemons={ favPokemons } />
    <>
      {
        favPokemons.length > 0 
          ? <PokemonGrid pokemons={favPokemons} /> 
          : <NoFav />
      }
    </>
  );
};
