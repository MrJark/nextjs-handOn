import Link from "next/link";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simplePokemon";
import { IoHeartCircleOutline } from "react-icons/io5";

interface Props {
  pokemon: SimplePokemon,
}


export const PokemonCard = ({ pokemon }: Props ) => {

    const { name, id } = pokemon;

  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60 ">
        <div className="bg-gray-300 rounded overflow-hidden shadow-lg ">
          <div className="flex flex-col items-center p-6 bg-transparent">

            <Image
              className=""
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={150}
              alt={name}
              priority={false} /* esto hace que sea un lazyloading. Solo si está en falses */
            />

            <p className="pt-2 text-lg font-semibold text-gray-950 capitalize">{name}</p>
            <div className="mt-5 ">
              <Link href={`/dashboard/pokemon/${id}`} className="border border-gray-700 rounded-full py-2 px-4 text-xs font-semibold text-gray-800">
                More Info
              </Link>
            </div>
          </div>
          <div className="">
            <Link className="px-4 py-2 bg-gray-400 flex items-center justify-center" href="/dashboard/main">

                <div>
                    <IoHeartCircleOutline className='text-red-600 text-3xl' />
                </div>
                <div className="pl-3">
                    <p className="text-lg font-semibold text-gray-800 leading-none">
                    Fav
                    </p>
                </div>

            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
