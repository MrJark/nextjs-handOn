import { PokemonCard, SimplePokemon } from "../..";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <section className="flex flex-wrap gap-8 items-center justify-center">
      {pokemons.map((pokemon) => (
        <article className="grid" key={pokemon.id}>
          <PokemonCard simplePokemon={pokemon} />
        </article>
      ))}
      {/* {pokemons.map((pokemon) => (
        <article className="grid" key={pokemon.id}>
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
          />
          <p className="text-black text-sm">{pokemon.name}</p>
        </article>
      ))} */}
    </section>
  );
};
