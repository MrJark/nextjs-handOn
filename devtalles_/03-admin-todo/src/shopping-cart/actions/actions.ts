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

//* Task 1: hacer que el remove funcione al dar al btn ✅ ( no pedia hacerlo de uno en uno pero lo hice)
//* Task 2: eliminar de uno en uno los elementos ✅( lo he hecho antes 🥲 pero me ha faltado eliminar la cookie, he borrado los elementos pero la cookie se mantenia pero en cantidad 0)
export const removeProductCart = (id: string) => {
  const cookieCart = getCookieCart(); // 1º coges la cookie

  if ( cookieCart[id] > 0 ) {
    cookieCart[id]-- // eliminas el item
  } 
  if (cookieCart[id] <= 0) {
    delete cookieCart[id]
  }
  // Debería poder ponerlo como else if pero no me respondo por tanto, lo he puesto como dos if distintos

  setCookie('cart', JSON.stringify(cookieCart))
}

// resolución de su task1
export const removeAllProductCartbyID = (id: string) => {
  const cookieCart = getCookieCart();
  delete cookieCart[id]

  setCookie('cart', JSON.stringify(cookieCart))
}

