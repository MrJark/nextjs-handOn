import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";
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
  "1": { id: "1", name: "bulbasaur" },
};

const pokemonSlice = createSlice({
  name: "competitivePokemon",
  initialState,
  reducers: {},
});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
