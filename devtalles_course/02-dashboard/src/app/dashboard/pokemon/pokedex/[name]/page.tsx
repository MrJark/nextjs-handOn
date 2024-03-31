// export default function PokemonPage(props: any) { // estas props o query parameters son propias de JS y devuelven aquellos parámetros que le envíes, en este caso el name

import { getPokemon } from "@/pokemons";

interface Props {
  params: { name: string };
}

export default async function PokemonPage({ params }: Props) {
  // console.log(props);
  const { name } = params;
  const pokemon = await getPokemon({ name });

  return (
    <div>
      <h1>Hello Pokemon Page to {name}</h1>
      {JSON.stringify(pokemon)}
    </div>
  );
}
