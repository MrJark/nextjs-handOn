import { NextResponse } from "next/server";

// según la función que quieras hacer, solo tienes que cambiar el GET por la que quieras: PUT, PATCH, DELETE, POST
export async function GET(request: Request) {

    return NextResponse.json({ // recomendable que sea un iobjeto lo que devuelva ya que es más fácil modificarla y añadirle cosas que hahcer un objeto promitivo
        count: 100,
    })
}