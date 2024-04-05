import { Pokemon } from "@/pokemons";

interface Props {
  // id?: string; // una de dos. depende como quieras tener al pokemon. A mi por el nombre me parece más fácil de identificar en la url
  // params: { name: string };
  name: string;
}

export const getPokemon = async ({ name }: Props): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    // cache: "force-cache", // para forzar a que se quede en caché la info pero no tiene sentido que se fuerce y a que a su vez se valide
    next: {
      revalidate: 60 * 60 * 24 * 30 * 6, // para que se recarge la página que se quedó en el caché cada 6 meses (60"*60'*24h*30días*6meses) qeu es más o menos cada cuanto sacan un juego nuevoi y por tanto, cada vez que pueden modificar la data de los pokemons
    },
  }).then((resp) => resp.json());

  // console.log("Charger:", pokemon.name);
  return pokemon;
};
