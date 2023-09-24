import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse, type NextRequest } from 'next/server'
/* Este código es el que nos dice si ha iniciado sesión el user */

// este export es una opción de Next para evitar que cachee de forma estática la ruta y que seimrpe se ejecute en el sercidor
export const dynamic = 'force-dynamic'

export async function GET (request: NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  // esto es la plataforma web no next 👆🏽

  if (code !== null) {
    const supabase = createRouteHandlerClient({ cookies })

    // usando el código que se le ha pasado por url, devuelve la sesión del usuario
    await supabase.auth.exchangeCodeForSession(code)
  }

  // return NextResponse.redirect('/')
  return NextResponse.redirect(requestUrl.origin) // esto devuelve al usuario a la página en la que estaba mientra que la de arriba lo lleva a la home. Lo suyo es esto de aquí
}
// callback?code=46696ab2-ead7-4a90-be43-eb322197f6ef
