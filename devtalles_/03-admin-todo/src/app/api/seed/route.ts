import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  // purgar la base de datos COMPLETA
  await prisma.todo.deleteMany();

  // const todo = await prisma.todo.create({
  //   data: { description: 'piedra de la mente', complete: true }
  // });
  // console.log(todo);
  
  await prisma.todo.createMany({
    data: [
      { description: 'Piedra del alma', complete: true},
      { description: 'Piedra del tiempo', complete: false},
      { description: 'Piedra del mente', complete: false},
      { description: 'Piedra del poder', complete: false},
      { description: 'Piedra del realidad', complete: false},
      { description: 'Piedra del espacio', complete: true},
    ]
  })

  return NextResponse.json({ message: 'Seed Executed'})
}