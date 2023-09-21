import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/src/pokemons";



export const metadata = {
 title: 'Fav',
 description: 'Fav',
};


export default async function Pokemons() {

  return (
    <>
        <div className="flex flex-col text-center">
          <span className="text-4xl font-semibold my-6 text-blue-50">Favourites Pokemons</span>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            {/** Tarea: Crear todos los poquemons ✅*/}
            {/* {
              pokemons.map( pokemon => (
                <Image
                key={pokemon.id}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                  width={100}
                  height={100}
                  alt={pokemon.name}
                />
              ))
            } */}
            <PokemonGrid pokemons={[]}/>
          </div>

        </div>
        {/* <h1>Pokemon Page</h1>
        {JSON.stringify(pokemons)} */}
    </>
  )
}
