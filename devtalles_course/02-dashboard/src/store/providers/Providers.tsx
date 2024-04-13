"use client";

import { Provider } from "react-redux";
import { store } from "..";
import { useEffect } from "react";
import { setCompoetitivePokemon } from "../pokemon/pokemonSlice";

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const competitive = JSON.parse(
      localStorage.getItem("competitive-pokemon") ?? "{}"
    );

    store.dispatch(setCompoetitivePokemon(competitive));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
