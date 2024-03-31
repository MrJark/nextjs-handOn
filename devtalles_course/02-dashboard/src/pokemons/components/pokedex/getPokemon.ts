import { Pokemon } from "@/pokemons";

interface Props {
  // id?: string; // una de dos. depende como quieras tener al pokemon. A mi por el nombre me parece más fácil de identificar en la url
  // params: { name: string };
  name: string;
}

export const getPokemon = async ({ name }: Props): Promise<Pokemon> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    cache: "force-cache", // para forzar a que se quede en caché la info
  }).then((resp) => resp.json());

  console.log("Charger:", pokemon.name);
  return pokemon;
};
