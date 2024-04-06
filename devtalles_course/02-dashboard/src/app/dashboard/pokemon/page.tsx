import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

interface Props {
  limit: number;
  offset: number;
}

export const metadata = {
  title: "Pokedex page",
  description: "Pokedex page",
};

const getPokemon = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
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

export default async function Pekemon() {
  const pokemons = await getPokemon(151);
  return (
    <main className="mx-1 my-2">
      <section className="flex gap-2 items-end justify-center mb-10">
        <h1 className="text-3xl text-[#ff3ea5] font-bold">Pokedex</h1>
        <span className="text-lg font-bold text-black">(static)</span>
      </section>
      <PokemonGrid pokemons={pokemons} />
    </main>
  );
}
