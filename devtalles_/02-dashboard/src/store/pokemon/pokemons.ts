
// /**
//  *  Forma del objeto a construir:
//   *   {
//   *    '1': { id: 1, name: bulbasaur }
//   *    '2': { id: 2, name: ivysaur }
//   *    '3': { id: 3, name: Venusaur }
//   *   }
// */

import { SimplePokemon } from '@/src/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface PokemonFavState {
  [key: string]: SimplePokemon,
}

const initialState: PokemonFavState = {
  // '1': { id: '1', name: 'Bulbasaur'},
  // '3': { id: '3', name: 'Venosaur'},
  // '151': { id: '151', name: 'Mew'},
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFav( state, action: PayloadAction<SimplePokemon> ) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if( !!state[id] ) {
        delete state[id];
        return;
      }

      state[id] = pokemon;
    }
  }
});

export const { toggleFav } = pokemonsSlice.actions

export default pokemonsSlice.reducer