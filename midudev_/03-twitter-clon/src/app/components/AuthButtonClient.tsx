'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

import { GithubIcon } from './icons'

export function AuthButton () {
  const [sesion, setSesion] = useState<Session | null >(null)
  const supabase = createClientComponentClient() // como es parte del cliente tengo que hacerlo con el clientComponent

  const handleSingIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback' //
      }
    })
  }

  const handleSingOut = async () => {
    await supabase.auth.signOut()
  }

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession()
      setSesion(data.session)
    }

    getSession()
  }, []) // como no depende de nada, es que solo se monta la primera vez

  return (
    <header>
      {
        (sesion === null)
          ? (<button onClick={handleSingIn} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2">
              <GithubIcon />
              Sign in with Github
            </button>)
          : (<button onClick={handleSingOut}>Sing Out</button>)
      }
    </header>
  )
}
