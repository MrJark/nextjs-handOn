import { ProductGrid, Title } from "@/components"
import { Product } from "@/interfaces"
import { Genders } from "@/interfaces/product.interface"
import { initialData } from "@/seed/seed"
// import { notFound } from "next/navigation"

const seedProducts = initialData.products

interface Props {
  params: {
    id: Genders,
  },
  // product: Product // yo había traido los products en las props
}

export default function Category_with_Id({ params }: Props) {
  // const { gender } = product  // y de las props desestructuro el gender
  const { id } = params
  const products = seedProducts.filter( product => product.gender === id)
  // console.log(product);
  const labels: Record<Genders, string> = { // forma de tipar un objeto literal. El ValidGenders apunta hacia que tipo de key es y el string es el formato
    'men': 'Men',
    'women': 'Women',
    'kid': 'Kids',
    'unisex': 'Unisex'
  }

  // if (id === 'kids' ){
  //   notFound(); // función especial de NEXT para que aparezca la pantalla de NotFound
  // }
  return (
    <>
      <Title
        title={`${labels[id]} articles`}
        subTitle="All Products"
        className="mb-2"
      />
      <ProductGrid products={ products } />
    </>
  )
}