import type { Metadata } from "next"; // tener esto ayuda a saber que metadata tienes que poner para que todo sea mas SEO friendly ( pulsas ctrl + spoace y te salen todas )


export const metadata: Metadata = {
  title: 'Página de pricing',
  description: 'Página del pricing del blog de mrjark',
  keywords: ['mrjark', 'seo', 'pricing', 'blog'],
};

export default function Pricing () {
  return (
    <>
      <h1 className=" text-5xl text-red-300">Pricing page</h1>
    </>
  )
}