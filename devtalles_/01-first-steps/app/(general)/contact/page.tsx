import type { Metadata } from "next"; // tener esto ayuda a saber que metadata tienes que poner para que todo sea mas SEO friendly ( pulsas ctrl + spoace y te salen todas )


export const metadata: Metadata = {
  title: 'Página de contacto de MrJark',
  description: 'Página de contacto de MrJark',
  keywords: ['mrjark', 'seo', 'contact', 'blog'],
};


export default function Contact () {
    return (
      <>
          <h1 className=" text-5xl text-red-300">Contact page</h1>
      </>
    )
  }
  