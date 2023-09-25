import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
  return( next: Dispatch ) => ( action: Action ) => {
    next(action); // esto es para ejecutar la acción
    
    // console.log(action); // devuelve un type: pokemons/toggleFav
    if ( action.type === 'pokemons/toggleFav' ) {

      const { pokemons } = state.getState() as RootState;

      localStorage.setItem('favPokemons', JSON.stringify( pokemons ));

      return;
    };
  }
}
