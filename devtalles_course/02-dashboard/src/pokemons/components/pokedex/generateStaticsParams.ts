//! esto solo se ejecuta en Build Time y es para generar de manera estática las páginas

import { PokemonResponse } from "@/pokemons";
// genero solo par alos 151 primeros como prueba

interface Props {
  limit?: number;
}

export async function generateStaticsParams({ limit = 151 }: Props) {
  // por default son los primeros 151
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  ).then((res) => res.json());
  //https://pokeapi.co/api/v2/pokemon?limit=151

  const static151pokemon = data.results.map((pokemon) => ({
    name: pokemon.name,
  }));

  return static151pokemon.map(({ name }) => ({
    name: name,
  }));
  // return [
  //   { id: "1" },
  //   { id: "2" },
  //   { id: "3" },
  //   { id: "4" },
  //   { id: "5" },
  //   { id: "6" },
  // ];
}
