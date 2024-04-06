import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/pokemons";

interface Props {
  limit?: number;
  offset?: number;
}

export const metadata = {
  title: "Your competitive Pokemons page",
  description: "Your competitive Pokemons page",
};

export default async function Pekemon() {
  return (
    <main className="mx-1 my-2">
      <section className="flex gap-2 items-end justify-center mb-10">
        <h1 className="text-3xl text-[#ff3ea5] font-bold">
          Competitive Pokemons
        </h1>
        <span className="text-lg font-bold text-black">(Dynamic)</span>
      </section>
      <PokemonGrid pokemons={[]} />
    </main>
  );
}
