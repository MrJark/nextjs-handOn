
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default function Home() {

  redirect('/dashboard/counter')

  return (
    <>
      <h1>Hello BB</h1>
    </>
  )
}
