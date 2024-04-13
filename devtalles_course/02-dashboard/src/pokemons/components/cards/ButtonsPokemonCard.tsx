import { useAppSelector } from "@/store";
import { BtnPokedex } from "./buttons/BtnPokedex";
import { BtnCompetitive } from "./buttons/BtnCompetitive";
import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";

interface Props {
  // id?: string;
  // name: string;
  pokemon: SimplePokemon;
}

export const ButtonsPokemonCard = ({ pokemon }: Props) => {
  return (
    <section className="border-b">
      <BtnPokedex pokemon={pokemon} />
      <BtnCompetitive pokemon={pokemon} />
    </section>
  );
};
