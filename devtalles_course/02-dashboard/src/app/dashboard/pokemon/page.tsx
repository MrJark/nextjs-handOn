import { PokemonResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

interface Props {
  limit: number;
  offset: number;
}

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!, // la id viene en la url, el último elemento ej: https://pokeapi.co/api/v2/ability/7/ por tanto, lo que hacese es cortar -split- la url por los slash -/- y te quedas con el último elemento -.at(-2)- que es el id. Si pones (-1) coge el último espacio vacio
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function Pekemon() {
  const pokemons = await getPokemon(151);
  return (
    <main className="w-full">
      <section className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <article className="grid" key={pokemon.id}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
            />
            <p>{pokemon.name}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
