import type { Metadata } from "next"; // tener esto ayuda a saber que metadata tienes que poner para que todo sea mas SEO friendly ( pulsas ctrl + spoace y te salen todas )


export const metadata: Metadata = {
  title: 'About Page',
  description: 'Página de About de MrJark',
  keywords: ['mrjark', 'seo', 'about', 'blog'],
};

export default function About () {
  return (
    <>
      <h1 className=" text-rose-300 text-5xl">Una about mas</h1>
    </>
  )
}
