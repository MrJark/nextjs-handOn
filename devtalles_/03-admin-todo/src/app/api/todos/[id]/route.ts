import prisma from '@/app/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

interface Segments { // estos segmentos aunque pongas number, serán string porque son parte de la url
  params: {
    id: string,
  }
}

export async function GET(request: Request, segments: Segments) {
  // tb se puede desestructurar los params del segment y de ahí ya coges el id con params.id
  const { params } = segments;
  const { id } = params;
  // console.log({segments}); // segments: { params: { id: '7a98f18f-5267-4b4f-a46d-df13db69b3e4' } }
  // *Tarea: hacer que a partir del id salga el TODO ❌ no he sabido traer la ruta del todos y por tanto, no he sabido como conseguir que aparezcan
  
  const todo = await prisma.todo.findFirst({ where: { id: id } })
  if ( !todo ) {
    return NextResponse.json({ message: `That TODO with id: ${id} is not exist`}, { status: 404 });
  }
  return NextResponse.json(todo)
}