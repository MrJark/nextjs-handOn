//  este componente es del lado del cliente. no hace falta porner el 'use client'

import { getCookie, hasCookie, setCookie } from "cookies-next"

/**
  fromato de las cookies:
  cookies cart: 
  {
    'uuid-123-1': 4,
    'uuid-123-3': 2,
    'uuid-123-2': 6,
    ...
  }
*/

export const getCookieCart = (): { [id: string]: number } => {
  if (hasCookie('cart')) {
    const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}')
    return cookieCart;
  }

  return {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart(); // -> apunta a un número, por tanto se pueden hacer operaciones

  if (cookieCart[id]) {
    cookieCart[id] = cookieCart[id] + 1;
    // cookieCart[id] =+ 1; de esta forma también sería correcto
  } else {
    cookieCart[id] = 1; // si no existe con ese id la cookie, la añades proque significa que la ha añadido
  }

  setCookie('cart', JSON.stringify(cookieCart));
};

//* Task: hacer que el remove funcione al dar al btn ✅
export const removeProductCart = (id: string) => {
  const cookieCart = getCookieCart(); // 1º coges la cookie

  if (cookieCart[id]) {
    cookieCart[id]--
  }

  setCookie('cart', JSON.stringify(cookieCart))
}
