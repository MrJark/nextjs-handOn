import Link from "next/link";
import { IoAlbumsOutline, IoGameControllerOutline } from "react-icons/io5";

interface Props {
  id: string;
  name: string;
}

export const ButtonsPokemonCard = ({ id, name }: Props) => {
  return (
    <section className="border-b">
      <Link
        className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
        href={`/dashboard/pokemon/pokedex/${name}`}
      >
        <IoAlbumsOutline className="text-red-600" size={40} />
        <div className="pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none">
            Pokedex
          </p>
          <p className="text-xs text-gray-500">View pokemon</p>
        </div>
      </Link>
      <Link
        className="px-4 py-2 hover:bg-gray-100 flex items-center justify-center"
        href="/dashboard/main"
      >
        <IoGameControllerOutline className="text-blue-800" size={40} />
        {/* <IoGameControllerSharp className="text-blue-800" size={40} /> */}
        <div className="pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none">
            Add to competitive
          </p>
          {/* <p className="text-xs text-gray-500">
                Is this pokemons good for competitive?
              </p> */}
        </div>
      </Link>
    </section>
  );
};
