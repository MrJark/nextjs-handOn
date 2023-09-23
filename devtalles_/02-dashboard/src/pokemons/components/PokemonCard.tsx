'use client'
import Link from "next/link";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simplePokemon";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/src/store";
import { toggleFav } from "@/src/store/pokemon/pokemons";


interface Props {
  pokemon: SimplePokemon,
}


export const PokemonCard = ({ pokemon }: Props ) => {

  const { name, id } = pokemon;
  const isFav = useAppSelector( state => !!state.pokemons[id] ); // transforma un objeto que va a estar en el staore en la parte del state en fav en un boolean
  const dispatch = useAppDispatch();
  // console.log(isFav);
  

  const onToggle = () => {
    // console.log('click', pokemon);
    dispatch( toggleFav(pokemon) ) 
  }
  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60 ">
        <div className="bg-gray-300 rounded overflow-hidden shadow-lg ">
          <div className="flex flex-col items-center p-6 bg-transparent">

            <Image
              key={id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={100}
              alt={name}
              priority={false} /* esto hace que sea un lazyloading. Solo si está en falses */
            />

            <p className="pt-2 text-lg font-semibold text-gray-950 capitalize">{name}</p>
            <div className="mt-5">
              <p className="mb-2 text-gray-800 font-medium tracking-wide">More info</p>
              <div className="flex flex-row gap-3">
                <Link href={`/dashboard/pokemonId/${id}`} className="border border-gray-700 rounded-full py-2 px-4 text-xs font-semibold text-gray-800">
                  by Id
                </Link>
                <Link href={`/dashboard/pokemonName/${name}`} className="border border-gray-700 rounded-full py-2 px-4 text-xs font-semibold text-gray-800">
                  by Name
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <div 
              onClick={onToggle}
              className="px-4 py-2 bg-gray-400 hover:bg-gray-500 flex items-center justify-center cursor-pointer"
            >
              <div>
                {
                  isFav 
                    ? <AiFillHeart className='text-red-600 text-3xl' />
                    : <AiOutlineHeart className='text-red-600 text-3xl' />
                }
              </div>
              <div className="pl-3">
                  <p className="text-lg font-semibold text-gray-800 leading-none">
                    {
                      isFav ? 'Remove to Fav' : 'Add to fav'
                    }
                  </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};
