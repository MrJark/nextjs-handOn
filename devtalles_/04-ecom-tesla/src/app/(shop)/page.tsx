import { Pagination, ProductGrid, Title } from "@/components";
// import { initialData } from "../../seed/seed";
import { getPaginatedProductsWithImages } from "@/actions";
import { redirect } from "next/navigation";

// const products = initialData.products; // ya no hace fañta porque lo estoy cogendo de la base de datos de prisma

interface Props {
  searchParams: {
    // estos Siempre son strings y es para saber la paginación
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1; // para la paginación
  const { products, currentPage, totalPage } =
    await getPaginatedProductsWithImages({ page });
  // console.log(searchParams);

  if (products.length === 0) {
    // para redireccionar al home cuando no haya más páginas
    redirect("/");
  }

  return (
    <>
      <Title title="Shop" subTitle="All Products" className="mb-2" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPage} />
    </>
  );
}
