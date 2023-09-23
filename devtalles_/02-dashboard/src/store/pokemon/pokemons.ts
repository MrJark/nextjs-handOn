
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { SimplePokemon } from '@/src/pokemons';

// /**
//  *  Forma del objeto a construir:
//   *   {
//   *    '1': { id: 1, name: bulbasaur }
//   *    '2': { id: 2, name: ivysaur }
//   *    '3': { id: 3, name: Venusaur }
//   *   }
// */

// interface PokemonFavState {
//     [key: string]: SimplePokemon,
// }

// export const initialState: PokemonFavState = {
//   '1': { id: '1', name: 'bulbasaur'},
//   '3': { id: '3', name: 'vulvasaur'},
//   '151': { id: '151', name: 'mew'},
//   '150': { id: '150', name: 'mewtwo'},
// }

// const pokemonSlice = createSlice({
//   name: 'pokemons',
//   initialState,
//   reducers: { // donde voy a crear las funciones que va a hacer el toggle
//     toggleFav( state, action: PayloadAction<SimplePokemon>) {
//         // 1º: saber si el simplePpkemon está en el initialState
//         const pokemon = action.payload;
//         const { id } = pokemon;

//         if( !!state[id] ) { // si existe...
//           delete state[id]; // lo elimino
//           return;
//         }

//         state[id] = pokemon; // si no existe, lo creo
//     }
//   }
// });

// export const { toggleFav } = pokemonSlice.actions

// export default pokemonSlice.reducer


// /**
//  *  Forma del objeto a construir:
//   *   {
//   *    '1': { id: 1, name: bulbasaur }
//   *    '2': { id: 2, name: ivysaur }
//   *    '3': { id: 3, name: Venusaur }
//   *   }
// */

import { SimplePokemon } from '@/src/pokemons';
import { createSlice } from '@reduxjs/toolkit'


interface PokemonFavState {
  [key: string]: SimplePokemon,
}

const initialState = {
  '1': { id: '1', name: 'Bulbasaur'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

  }
});

export const {  } = pokemonsSlice.actions

export default pokemonsSlice.reducer