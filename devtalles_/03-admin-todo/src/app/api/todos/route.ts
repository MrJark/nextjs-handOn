import prisma from '@/app/lib/prisma'
import { getUserSessionServer } from '@/auth/actions/authActions';
import { NextResponse } from 'next/server'
import * as yup from 'yup';

// ESTOS SON LOS ENDPOINTS
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

// después de haber instalado YUP
const postSchema = yup.object({
  description: yup.string().required(), // le dices a yup que es de tipo string y que es requerido y si no viene, que se detenga
  complete: yup.boolean().optional().default(false), // es un boolean, que no es requerido y que por defecto está en false
})

export async function POST(request: Request) {

  const user = await getUserSessionServer();
  if (!user) {
    return NextResponse.json('No autorize', { status: 401 })
  }

  try {
    const body = await postSchema.validate( await request.json() );
    const { complete, description } = body;
    
    const todo = await prisma.todo.create({ data: {complete, description, userId: user.id} })
  
    return NextResponse.json(todo)
  } catch (err) {
    return NextResponse.json( err, { status: 400 } )
  }
}

export async function DELETE(request: Request) {

  const user = await getUserSessionServer(); // para que solo guarde los todos del usuario en concreto
  if (!user) {
    return NextResponse.json('No autorize', { status: 401 })
  }

  try {
    await prisma.todo.deleteMany({ where: { complete: true, userId: user.id }})
  
    return NextResponse.json('good deleted')
  } catch (err) {
    return NextResponse.json( err, { status: 400 } )
  }
}
