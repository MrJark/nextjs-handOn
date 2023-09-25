'use client'

import { useAppSelector } from "@/src/store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { NoFav } from "./NoFavPokemons";


export const FavPokemons = () => {

    const  favPokemons = useAppSelector( state => Object.values(state.pokemons) );
    // console.log({favPokemons});
    const [pokemons, setPokemons] = useState(favPokemons)
    

    return (
        // <PokemonGrid pokemons={ favPokemons } />
        <>
            {
                pokemons.length > 0 
                    ? (<PokemonGrid pokemons={ pokemons } />)
                    : ( <NoFav />)
            }
        </>
    )
}
