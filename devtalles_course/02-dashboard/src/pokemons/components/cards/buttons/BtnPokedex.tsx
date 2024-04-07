import Link from "next/link";
import { IoAlbumsOutline } from "react-icons/io5";

interface Props {
  name: string;
  id?: number;
}
export const BtnPokedex = ({ name, id }: Props) => {
  return (
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
  );
};
