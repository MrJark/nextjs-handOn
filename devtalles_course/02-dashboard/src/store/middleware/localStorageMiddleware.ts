//
/**
 * Los middleware son funciones que están programadas para que se ejecuten en algún momento del tiempo o que dependa
 * de una acción en concreto.
 * Por ejemplo, cuando cambie X cosa, haz Y
 *
 * Es algo que se coloca en medio de una acción en concreto para cuando se ejecute y se dispare
 * https://redux-toolkit.js.org/api/getDefaultMiddleware
 */

import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    // console.log({ action }); // con este log se que tipo de acción se está ejecutando y por ende, puedo interferirla con el middleware 'competitivePokemons/toggleCompetitive'
    if (action.type === "competitivePokemons/toggleCompetitive") {
      const { competitivePokemon } = state.getState() as RootState;
      localStorage.setItem(
        "competitive-pokemon",
        JSON.stringify(competitivePokemon)
      );

      return;
    }
  };
};
