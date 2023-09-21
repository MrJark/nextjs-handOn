/* //* Tarea: Hacer que esta tarea funcione ✅ 
  ! Habia creado casi bien la tarea porque habia creado la misma ruta para dos páginas distintas
*/

import { Pokemon, PokemonResponse } from "@/src/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TbArrowBackUp } from "react-icons/tb";

interface Props {
  params: {name: string},
}

// Esto solo ejecuta en el build time y es para la creación de las páginas de los pokemons que ya se que existen, es decir, si se que tengo 151, como en 1998, voy a crear de manera estática las 151 pag
export async function generateStaticParams() {
  const limit:number = 151;

  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
  .then( res => res.json() );

  const static151pokemons = data.results.map( pokemon => ({
    name: pokemon.name
  }))

  return static151pokemons.map( ({ name }) => ({
    name: name
  }))

}

// esta función es para hacer la metadata de forma dinámica ya que poniendola 'en duro' no sería posible
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    
    
  try {
      const pokemon = await getPokemon(params.name);
      const { id, name } = pokemon;
  
      return {
          title: `#${ id } - ${ name }`,
          description: `Página del pokemon ${ name }`,
      }
  } catch (error) {
      return {
          title: `Página del pokemon con el id qeu has buscado no ha sido encontrada`,
          description: `Commodo anim ad fugiat nulla veniam irure tempor reprehenderit aliquip. Aliqua ipsum ea nisi occaecat excepteur. Irure minim ea cillum quis culpa aute sunt nostrud reprehenderit ut pariatur.`
      }
  }
} 

const getPokemon = async ( name: string ): Promise<Pokemon> => {

    try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,{
            next: {
                revalidate: 60 * 60 * 30 * 6
            }
        })
        .then( res => res.json())        
    
        return pokemon;
    } catch (error) {
        notFound()
    }
}


export default async function PokemonPage({ params }: Props) {

    const pokemon = await getPokemon(params.name);
    
  
    return (
      <div className="flex mt-5 flex-col items-center text-slate-950">
        <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-gray-300 bg-clip-border  shadow-lg  p-3">
          <div className="mt-2 mb-8 w-full">
          <div className="flex flex-row justify-between">
              <h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
                #{pokemon.id} {pokemon.name}
              </h1>
              <Link
                href="/dashboard/pokemons"
                className=" w-10 h-10 flex items-center justify-center mr-4 bg-slate-950 rounded-full text-white hover:bg-red-300 hover:text-black"
              >
                <TbArrowBackUp className="text-4xl" />
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                width={150}
                height={150}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />
  
  
              <div className="flex flex-wrap">
                {
                  pokemon.moves.map( move => (
                    <p key={move.move.name} className="mr-2 capitalize">{move.move.name}</p>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 px-2 w-full">
  
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Types</p>
              <div className="text-base font-medium text-navy-700 flex">
                {
                  pokemon.types.map(type => (
                    <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                  ))
                }
              </div>
            </div>
  
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
              <p className="text-sm text-gray-600">Peso</p>
              <span className="text-base font-medium text-navy-700 flex">
                {
                  `${pokemon.weight} Grams`
                }
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
    );
  }