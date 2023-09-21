import { Pokemon } from "@/src/pokemons";
import { Metadata } from "next";

interface Props {
    params: {id: string},
}

// esta función es para hacer la metadata de forma dinámica ya que poniendola 'en duro' no sería posible
export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const pokemon = await getPokemon(params.id);
    const { id, name } = pokemon;

    return {
        title: `#${ id } - ${ name }`,
        description: `Página del pokemon ${ name }`,
    }
}

const getPokemon = async ( id: string ): Promise<Pokemon> => {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
        cache: 'force-cache', // obliga a que se use el caché si se manda más de una vez para no hacer más de una petición sin sentido
        next: { // esto lo que hace es revalidar la petición cada 6 meses por si cambia algo que se mantenga actualizada
            revalidate: 60 * 60 * 30 * 6
        }
    })
    .then( res => res.json())

    console.log('Se cargo: ', pokemon.name);
    

    return pokemon;
}

export default async function PokemonPage ({ params }: Props) {

    const pokemon =await getPokemon(params.id)
    return (
        <div>
            Pokemon { params.id} 
            <div>
                {pokemon.name}
            </div>
        </div>
    )
}
