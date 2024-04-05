// export default function PokemonPage(props: any) { // estas props o query parameters son propias de JS y devuelven aquellos parámetros que le envíes, en este caso el name

import { getPokemon } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";

interface Props {
  params: { name: string };
}

// he tendio que hacer la metadata dinámica aquí en vez de exportarla a un compoente separado
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // para tener un resguardo por si la metadata falla
  try {
    const pokemon = await getPokemon(params);
    // const { id, name } = pokemon; // puedes desestructurar más elementos, todos los que vienen
    return {
      title: `${pokemon.name.toUpperCase()} Pokedex page`,
      description: `Page for ${pokemon.name} with id #${pokemon.id}`,
      // lo que viene aquí dentro es la metadata que se va a mostrar en la página y puedes generar cualquier tipo de metadata
    };
  } catch (error) {
    console.log("This is the error: ", error);

    notFound();
    return {
      title: "Pokedex´ Pokemon page",
      description: "Pokedex´ pokemon description",
    };
  }
}

export default async function PokemonPage({ params }: Props) {
  // console.log(props);
  const { name } = params;
  const pokemon = await getPokemon({ name });
  // GenerateMetadata({ params }); // quería crear un componente que fuera úncio para la metadata pero... no va. lo bueno, como son rutas dinámicas, solo tengo que hacerlo aquí

  return (
    <main>
      {/* <h1>Hello Pokemon Page to {name}</h1> */}
      <div className="flex mt-5 flex-col items-center text-slate-800">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
          <div className="mt-2 mb-8 w-full">
            <section className="flex items-center justify-between">
              <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                #{pokemon.id} {pokemon.name}
              </h1>
              <Link href="/dashboard/pokemon">
                <IoArrowBackOutline size={40} />
              </Link>
            </section>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ""}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />

              <div className="flex flex-wrap">
                {pokemon.moves.map((move) => (
                  <p key={move.move.name} className="mr-2 capitalize">
                    {move.move.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Types</p>
              <div className="text-base font-medium text-navy-700 flex">
                {pokemon.types.map((type) => (
                  <p key={type.slot} className="mr-2 capitalize">
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Peso</p>
              <span className="text-base font-medium text-navy-700 flex">
                {pokemon.weight} kg
              </span>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Regular Sprites</p>
              <div className="flex justify-center">
                <Image
                  src={pokemon.sprites.front_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />

                <Image
                  src={pokemon.sprites.back_default}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
              <p className="text-sm text-gray-600">Shiny Sprites</p>
              <div className="flex justify-center">
                <Image
                  src={pokemon.sprites.front_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />

                <Image
                  src={pokemon.sprites.back_shiny}
                  width={100}
                  height={100}
                  alt={`sprite ${pokemon.name}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
