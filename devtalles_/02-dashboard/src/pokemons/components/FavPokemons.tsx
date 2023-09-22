'use client';

import { useAppSelector } from "@/src/store";
import { PokemonGrid } from "..";



export const FavPokemons = () => {

    // const favPokemons = useAppSelector( state => state.pokemons); // tengo que transformarlo en un objeto
    const favPokemons = useAppSelector( state => Object.values(state.pokemons) );
    // console.log(favPokemons);
    
    return (
        <PokemonGrid pokemons={ favPokemons } />
    )
}
