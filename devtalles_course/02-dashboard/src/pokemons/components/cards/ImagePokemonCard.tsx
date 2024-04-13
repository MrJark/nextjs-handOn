import { SimplePokemon } from "@/pokemons/interfaces/simple-pokemon";
import Image from "next/image";

interface Props {
  // id: string;
  // name: string;
  pokemon: SimplePokemon;
}
export const ImagePokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  return (
    <section className="flex flex-col items-center p-6 bg-gray-800 border-b">
      <p className="pt-2  capitalize text-lg font-semibold text-gray-50">
        {name}
      </p>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        width={100}
        height={100}
        alt={name}
        className="w-40 h-40" // para que los tamaños de los pokemon no afecten a las cards
        priority={false} // esto es para que se carguen bajo demanda y si es true, nada más cargue la página, eso tb se va a cargar
      />
      {/* <p className="text-sm text-gray-100">stats?</p> */}
      {/* <div className="mt-5">
            <a className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Manage your Account
            </a>
          </div> */}
    </section>
  );
};
