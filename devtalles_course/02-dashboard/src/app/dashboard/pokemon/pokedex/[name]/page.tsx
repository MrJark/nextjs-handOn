// export default function PokemonPage(props: any) { // estas props o query parameters son propias de JS y devuelven aquellos parámetros que le envíes, en este caso el name

interface Props {
  params: { name: string };
}

export default function PokemonPage({ params }: Props) {
  // console.log(props);
  const { name } = params;

  return (
    <div>
      <h1>Hello Pokemon Page to {name}</h1>
    </div>
  );
}
