import { PokemonResponse } from "@/pokemons/interfaces/pokemon-response";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";

export const getUnstructurePokemon = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!, // la id viene en la url, el último elemento ej: https://pokeapi.co/api/v2/ability/7/ por tanto, lo que hacese es cortar -split- la url por los slash -/- y te quedas con el último elemento -.at(-2)- que es el id. Si pones (-1) coge el último espacio vacio
    name: pokemon.name,
  }));

  // throw new Error("Something wrong");
  return pokemons;
};
