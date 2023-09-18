import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 
        className='text-5xl'
      >Hola mundo</h1>

      <Link href={'/about'}>About Page</Link>
    </main>
  )
}
