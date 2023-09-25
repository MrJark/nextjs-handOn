import { FavPokemons } from "@/src/pokemons";

export const metadata = {
  title: "Fav Pokemon Page",
  description: "Fav Pokemons",
};

export default async function Pokemons() {
  // Esto era para la tarea 2, estaba bien pero no en este archivo
  // const isFav = useAppSelector( state => state.pokemons )
  // console.log(isFav);

  return (
    <>
      <div className="flex flex-col text-center">
        <span className="text-4xl font-semibold my-6 text-blue-50">
          Your Favourites Pokemons
        </span>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <FavPokemons />
        </div>
      </div>
    </>
  );
}
