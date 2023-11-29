import { notFound } from "next/navigation"

interface Props {
  params: {
    id: string,
  }
}

export default function Category_with_Id({ params }: Props) {
  const {id} = params

  if (id === 'kids' ){
    notFound(); // función especial de NEXT para que aparezca la pantalla de NotFound
  }
  return (
    <div>
      <h1>Category Id Page</h1>
      <p>{id}</p>
    </div>
  )
}