import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) {

  // purgar la base de datos COMPLETA
  await prisma.todo.deleteMany(); // delete * from todo
  await prisma.user.deleteMany(); // delete * from user

  const user = await prisma.user.create({ // creo el nuevo user con todos los todos y relaciones gracias a las relaciones de prisma (https://www.prisma.io/docs/concepts/components/prisma-schema/relations)
    data: {
      email: 'test2@google.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'client'],
      todos:{
        create: [
          { description: 'Piedra del alma', complete: true},
          { description: 'Piedra del tiempo', complete: false},
          { description: 'Piedra del mente', complete: false},
          { description: 'Piedra del poder', complete: false},
          { description: 'Piedra del realidad', complete: false},
          { description: 'Piedra del espacio', complete: true},
        ] 
      }
    }
  })

  // const todo = await prisma.todo.create({
  //   data: { description: 'piedra de la mente', complete: true }
  // });
  // console.log(todo);

  // comento esto porque ahora estoy haciendo la lógica a través de la validación del usuario
  // await prisma.todo.createMany({ 
  //   data: [s
  //     { description: 'Piedra del alma', complete: true},
  //     { description: 'Piedra del tiempo', complete: false},
  //     { description: 'Piedra del mente', complete: false},
  //     { description: 'Piedra del poder', complete: false},
  //     { description: 'Piedra del realidad', complete: false},
  //     { description: 'Piedra del espacio', complete: true},
  //   ]
  // })

  return NextResponse.json({ message: 'Seed Executed'})
}
