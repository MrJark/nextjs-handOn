import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers' // son necesarias para que supabase sepa el estado del usuario
import { AuthButton } from './components/AuthButtonClient'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies }) // no es la parte del cliente por eso se usan las cookies

  const { data: posts } = await supabase.from('post').select('*') // el nombre posts es el que le he puesto en la db de supabase
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello X 🙋🏽‍♂️</h1>
      <AuthButton />
      <pre>
        {
          JSON.stringify(posts, null, 2)
        }
      </pre>
    </main>
  )
}
