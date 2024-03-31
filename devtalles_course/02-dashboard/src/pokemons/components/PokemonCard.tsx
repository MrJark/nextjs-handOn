import { SimplePokemon } from "../interfaces/simple-pokemon";

import { ButtonsPokemonCard, ImagePokemonCard } from "..";

interface Props {
  simplePokemon: SimplePokemon;
}

export const PokemonCard = ({ simplePokemon }: Props) => {
  const { id, name } = simplePokemon;

  return (
    <article className="mx-auto right-0 mt-2 w-60">
      <section className="bg-white rounded overflow-hidden shadow-lg">
        <ImagePokemonCard id={id} name={name} />
        {/* <ImagePokemonCard {...simplePokemon} />  Ambas opciones, la de arriba como esta son válidas porque tinen el mismo nombre y con el spread se puede, si no solo sería válida la de arriba*/}
        <ButtonsPokemonCard id={id} name={name} />
        {/* <ButtonsPokemonCard {...simplePokemon} /> */}
      </section>
    </article>
  );
};
