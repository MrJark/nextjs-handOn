import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";
/**
 * Formato del objeto de Competitivo
 * {
 *  'id_identify: 1': {id: id_pokemon, name: name_pokemon, ...},
 *  'id_identify: 2': {id: id_pokemon, name: name_pokemon, ...},
 *  ...
 * }
 */

interface CompetitivePokemonState {
  [key: string]: SimplePokemon;
}

// pokemon por defecto para verlo
const initialState: CompetitivePokemonState = {
  // "1": { id: "1", name: "bulbasaur" },
  // "2": { id: "2", name: "ivysaur" },
  // "3": { id: "3", name: "venasaur" },
  // "5": { id: "5", name: "charmeleon" },
};

const pokemonSlice = createSlice({
  name: "competitivePokemons",
  initialState,
  reducers: {
    // creo un unico reducer porque es una acción: añadir y quitar de favoritos y no tiene sentido crear dos distintos
    toggleCompetitive(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload; // para saber si el pokemon está en el payload, es decir, en el state, que traducido sería si está en competitivo
      const { id } = pokemon;

      if (!!state[id]) {
        //si existe, elimino ese id
        delete state[id];
        return;
      }
      // if (state[id] !== undefined) {
      // }
      state[id] = pokemon; // si no existe, lo creo
    },
  },
});

export const { toggleCompetitive } = pokemonSlice.actions;

export default pokemonSlice.reducer;
