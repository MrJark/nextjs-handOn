"use client";

import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavPokemon } from "./pokemon/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favPokemons") ?? "{}");

    store.dispatch(setFavPokemon(fav));
    // return fav;
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
