import { PokemonGrid, PokemonResponse, SimplePokemon } from "@/src/pokemons";





const getPokemons = async( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then( res => res.json() )

  const pokemons = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!, // como la url es del tipo "https://pokeapi.co/api/v2/pokemon/1/" lo que haces es partirla a partir de los / y coges la posición -2, es decir, el 1 porque la -1 sería el espacio después del último /. ( la ! es para decirle que siempre va a venir y nunca será undefined)
    name: pokemon.name
  }))

  return pokemons
}



export default async function Pokemons() {

  const pokemons = await getPokemons(151);
  

  return (
    <>
        <div className="flex flex-col text-center">
          <span className="text-4xl font-semibold my-6 text-blue-50 animate-pulse">First {pokemons.length} Pokemons</span>
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
            <PokemonGrid pokemons={pokemons}/>
          </div>

        </div>
        {/* <h1>Pokemon Page</h1>
        {JSON.stringify(pokemons)} */}
    </>
  )
}
