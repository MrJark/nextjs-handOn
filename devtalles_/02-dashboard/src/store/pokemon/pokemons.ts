// /**
//  *  Forma del objeto a construir:
//   *   {
//   *    '1': { id: 1, name: bulbasaur }
//   *    '2': { id: 2, name: ivysaur }
//   *    '3': { id: 3, name: Venusaur }
//   *   }
// */

// /**
//  *  Nueva Forma del objeto a construir:
//   *   {
//   *     favorites: {
//   *        '1': { id: 1, name: bulbasaur }
//   *        '2': { id: 2, name: ivysaur }
//   *        '3': { id: 3, name: Venusaur }
//   *     }
//   *   }
// */

import { SimplePokemon } from '@/src/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// interface PokemonFavState {
//   [key: string]: SimplePokemon,
// }

// nueva forma
interface PokemonFavState {
  fav: { [key: string]: SimplePokemon },
}

// Para leer del LS
// const getInitState = (): PokemonFavState => {
//   // if ( typeof localStorage === 'undefined' ) return {}; // esto es para que cuando se ejecute en el lado del servidor y no haya nada, se cree un arreglo vacio y ya ( no es una solución perfecta ya que ùede dar problemas, y los da, el que no sea igual lo que hay del lado del cliente con lo que hay del lado del servidor )
  
  
//   // hace que el LS transforme en JSON el string y como puede ser nulo, en ese caso, devuelve un {} vacio
//   const fav = JSON.parse( localStorage.getItem('favPokemons') ?? '{}' ) 

//   return fav;
// }

const initialState: PokemonFavState = {
  fav: {},
  // ...getInitState(),
  // '1': { id: '1', name: 'Bulbasaur'},
  // '3': { id: '3', name: 'Venosaur'},
  // '151': { id: '151', name: 'Mew'},
}

const pokemonsSlice = createSlice({ // no es buena práctica hacer estados secundarios dentro de los reducers
  name: 'pokemons',
  initialState,
  reducers: {
    setFavPokemon ( state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
      state.fav = action.payload;
    },

    toggleFav( state, action: PayloadAction<SimplePokemon> ) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if( !!state.fav[id] ) { //! es una mala práctica grabar en el LocalStorage a través del slice porque si falla el ls, falla todo
        delete state.fav[id];
        // return;
      } else {
        state.fav[id] = pokemon;
      }
      
      // Esto es lo que NO se debe hacer
      localStorage.setItem('favPokemons', JSON.stringify( state.fav ))
    }
  }
});

export const { toggleFav, setFavPokemon } = pokemonsSlice.actions

export default pokemonsSlice.reducer