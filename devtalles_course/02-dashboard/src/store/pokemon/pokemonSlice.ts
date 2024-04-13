import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";
/**
 * Formato del objeto de Competitivo
 * {
 *  favourite: {
 *   'id_identify: 1': {id: id_pokemon, name: name_pokemon, ...},
 *   'id_identify: 2': {id: id_pokemon, name: name_pokemon, ...},
 *  }
 * }
 */

interface CompetitivePokemonState {
  competitive: { [key: string]: SimplePokemon };
}

const getInitialState = (): CompetitivePokemonState => {
  // if (typeof localStorage === "undefined") return {}; // una forma de hacerlo

  const competitive = JSON.parse(
    localStorage.getItem("competitive-pokemon") ?? "{}"
  );

  return competitive;
};

// pokemon por defecto para verlo
const initialState: CompetitivePokemonState = {
  competitive: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "2": { id: "2", name: "ivysaur" },
  // "3": { id: "3", name: "venasaur" },
  // "5": { id: "5", name: "charmeleon" },
};

const pokemonSlice = createSlice({
  name: "competitivePokemons",
  initialState,
  reducers: {
    // para el local storage
    setCompoetitivePokemon(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.competitive = action.payload;
    },
    // creo un unico reducer porque es una acción: añadir y quitar de favoritos y no tiene sentido crear dos distintos
    toggleCompetitive(state, action: PayloadAction<SimplePokemon>) {
      // las acciones tienen que ser funciones puras, es decir, no deben tener contacto con nada y solo devolver el elemento
      const pokemon = action.payload; // para saber si el pokemon está en el payload, es decir, en el state, que traducido sería si está en competitivo
      const { id } = pokemon;

      // if (!!state.competitive[id]) {
      //   //si existe, elimino ese id
      //   delete state.competitive[id];
      //   return;
      // }
      // // if (state[id] !== undefined) {
      // // }
      // state.competitive[id] = pokemon; // si no existe, lo creo

      // otra forma de hacerlo
      if (!!state.competitive[id]) {
        //si existe, elimino ese id
        delete state.competitive[id];
      } else {
        state.competitive[id] = pokemon;
      }
      //! 👇🏼 lo que NO se debe hacer
      localStorage.setItem("competitive-pokemon", JSON.stringify(state));
    },
  },
});

export const { toggleCompetitive, setCompoetitivePokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
