// export default function PokemonPage(props: any) { // estas props o query parameters son propias de JS y devuelven aquellos parámetros que le envíes, en este caso el name

import { getPokemon } from "@/pokemons";
import { Metadata } from "next";

interface Props {
  params: { name: string };
}

// he tendio que hacer la metadata dinámica aquí en vez de exportarla a un compoente separado
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pokemon = await getPokemon(params);
  // const { id, name } = pokemon; // puedes desestructurar más elementos, todos los que vienen
  return {
    title: `${pokemon.name.toUpperCase()} Pokedex page`,
    description: `Page for ${pokemon.name} with id #${pokemon.id}`,
    // lo que viene aquí dentro es la metadata que se va a mostrar en la página y puedes generar cualquier tipo de metadata
  };
}

export default async function PokemonPage({ params }: Props) {
  // console.log(props);
  const { name } = params;
  const pokemon = await getPokemon({ name });
  // GenerateMetadata({ params }); // quería crear un componente que fuera úncio para la metadata pero... no va. lo bueno, como son rutas dinámicas, solo tengo que hacerlo aquí

  return (
    <div>
      <h1>Hello Pokemon Page to {name}</h1>
      {/* {JSON.stringify(pokemon)} */}
    </div>
  );
}
