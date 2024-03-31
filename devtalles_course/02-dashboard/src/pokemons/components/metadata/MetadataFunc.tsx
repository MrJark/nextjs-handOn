//* esto es para exportar la metadata de manera dinámica y se tienenq ue hacer a través de ciertos componentes concretos
//! no me funciona el componente

import { Metadata } from "next";
import { getPokemon } from "../pokedex/getPokemon";

interface Props {
  params: { name: string }; // es name porque he decidido que sea así por la facilidad de lectura en la url que tiene vs el id
}

export async function GenerateMetadata({ params }: Props): Promise<Metadata> {
  const pokemon = await getPokemon(params);
  // const { id, name } = pokemon; // puedes desestructurar más elementos, todos los que vienen
  return {
    title: `${pokemon.name} Pokedex page`,
    description: `Page for ${pokemon.name} with id #${pokemon.id}`,
    // lo que viene aquí dentro es la metadata que se va a mostrar en la página y puedes generar cualquier tipo de metadata
  };
}
