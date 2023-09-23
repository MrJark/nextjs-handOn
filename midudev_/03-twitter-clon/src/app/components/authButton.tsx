'use client'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'

export function authButton () {
  const supabase = createServerComponentClient()

  const handleSingIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback' //
      }
    })
  }
}
