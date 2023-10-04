import prisma from '@/app/lib/prisma';
import { getUserSessionServer } from '@/auth/actions/authActions';
import { Todo } from '@prisma/client';
import { NextResponse } from 'next/server'
import * as yup from 'yup';

interface Segments { // estos segmentos aunque pongas number, serán string porque son parte de la url
  params: {
    id: string,
  }
}

// para no repetir el código y centralizar
const getTodo = async ( id: string ): Promise< Todo | null > => {

  const user = await getUserSessionServer();
  if (!user) {
    return null;
  }
  
  const todo = await prisma.todo.findFirst({ where: { id: id } });

  if( todo?.userId !== user.id ) {
    return null;
  }

  return todo;
}

export async function GET(request: Request, segments: Segments) {
  // tb se puede desestructurar los params del segment y de ahí ya coges el id con params.id
  
  const { params } = segments;
  const { id } = params;

  // console.log({segments}); // segments: { params: { id: '7a98f18f-5267-4b4f-a46d-df13db69b3e4' } }
  // *Tarea: hacer que a partir del id salga el TODO ❌ no he sabido traer la ruta del todos y por tanto, no he sabido como conseguir que aparezcan
  
  // const todo = await prisma.todo.findFirst({ where: { id: id } })
  const todo = await getTodo(id)
  if ( !todo ) {
    return NextResponse.json({ message: `That TODO with id: ${id} is not exist`}, { status: 404 });
  }
  return NextResponse.json(todo)
}

// esquema de validadción
const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
})

export async function PUT(request: Request, segments: Segments) {
  // tb se puede desestructurar los params del segment y de ahí ya coges el id con params.id
  const { params } = segments;
  const { id } = params; 
  // console.log({segments}); // segments: { params: { id: '7a98f18f-5267-4b4f-a46d-df13db69b3e4' } }
  // *Tarea: hacer que a partir del id salga el TODO ❌ no he sabido traer la ruta del todos y por tanto, no he sabido como conseguir que aparezcan
  
  // const todo = await prisma.todo.findFirst({ where: { id: id } }) // por el getTodo
  const todo = await getTodo(id)
  if ( !todo ) {
    return NextResponse.json({ message: `That TODO with id: ${id} is not exist`}, { status: 404 });
  }

  try {
    const body = await request.json();
  
    // const { complete, description } = body;
    // validación 
    const { complete, description } = await putSchema.validate( body );
  
    const updatedTodo = await prisma.todo.update({
      where: { id },
      // data: { ...body }, // con esto le estás enviando a la DB tal cual el objeto que te envia el user y eso es peligroso
      data: { complete, description }, // método de seguridad para que el user solo pueda enviar aquello que quieras 
    })

    return NextResponse.json(updatedTodo)
    
  } catch (err) {
    return NextResponse.json(err, { status: 404 })
  }
}
