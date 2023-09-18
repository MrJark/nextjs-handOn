import type { Metadata } from "next"; // tener esto ayuda a saber que metadata tienes que poner para que todo sea mas SEO friendly ( pulsas ctrl + spoace y te salen todas )


export const metadata: Metadata = {
  title: 'About Page',
  description: 'Página de About de MrJark',
  keywords: ['mrjark', 'seo', 'about', 'blog'],
};

export default function About () {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <h1 className=" text-5xl text-red-300">About Page</h1>
        <span className=" text-3xl">Una about mas</span>
      </main>
    </>
  )
}
