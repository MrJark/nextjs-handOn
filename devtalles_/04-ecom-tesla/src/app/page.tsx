import { titleFont } from "./config/fonts"


export default function Home() {
  return (
    <main className="">
      <h1 className='text-2xl'>Hello Word</h1>
      <h2 className={ `${titleFont.className} font-bold text-3xl text-red-300`}>Hola Mundo</h2>
    </main>
  )
}
