interface Props {
  limit: number;
  offset: number;
}

const getPokemon = async ({ limit, offset }: Props) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  return data;
};

const obj = {
  limit: 3,
  offset: 0,
};
export default async function Pekemon() {
  const pokemons = await getPokemon(obj);
  return (
    <div>
      <h1>{JSON.stringify(pokemons)}</h1>
    </div>
  );
}
