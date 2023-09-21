'use client'

import Image from "next/image"
import Link from "next/link"

 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
        
        <Image 
            src='https://midu.dev/images/this-is-fine-404.gif'
            className="rounded-xl"
            alt="meme de perrito en llamas"
            width={480}
            height={400}
        />
        <Link href='/'>Go Home</Link>
        <div className="flex flex-col items-center justify-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-200 mt-8">500</p>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 mt-2">Server Error</p>
            <p className="md:text-lg xl:text-xl text-gray-400 mt-4">Whoops, something went wrong on our servers.</p>
        </div>

    </div>
  )
}