'use client'

import { useAppSelector } from "@/src/store";
import { PokemonGrid } from "..";


export const FavPokemons = () => {

    const  favPokemons = useAppSelector( state => state.pokemons );
    console.log({favPokemons});
    

    return (
        <PokemonGrid pokemons={ [] } />
    )
}
