import { SimplePokemon } from "@/app/pokemons"
import Image from "next/image"
import { PokemonCard } from "./PokemonCard"

interface Props {
    pokemons: SimplePokemon[],

}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
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
      {
        pokemons.map( pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon}/>
        ))
      }
    </>
  )
}
