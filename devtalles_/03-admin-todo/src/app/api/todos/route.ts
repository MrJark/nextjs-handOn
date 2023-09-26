import prisma from '@/app/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request: Request) { 

  const { searchParams } = new URL( request.url );
  const take = searchParams.get('take') ?? '10'; // el take es un query param el cual es opcional y has creado en la parte de la ruta y por defecto, son 10 los elementos que te va a mostrar
  const skip = searchParams.get('skip') ?? '0'; // el take es un query param el cual es opcional y has creado en la parte de la ruta
  
  // Si pongo Number o un + delante, ya no haría falta poner los + delante del skip y take ya que ya serían números. Los + los pongo para hacer la transforma number
  // const take = Number( searchParams.get('take') ?? '10' );
  // const skip = Number( searchParams.get('skip') ?? '0' );
  
  if ( isNaN(+take) ) {
    return NextResponse.json({ message: 'Take must be a number'}, { status: 400 });
  }
  if ( isNaN(+skip) ) {
    return NextResponse.json({ message: 'Skip must be a number'}, { status: 400 });
  }
  
  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip,
  });

  return NextResponse.json(todos);
}
