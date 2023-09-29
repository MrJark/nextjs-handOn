'use server'

import prisma from "@/app/lib/prisma"
import { Todo } from "@prisma/client"
import { revalidatePath } from "next/cache";


export const toggleTodo = async ( id: string, complete: boolean ): Promise<Todo> => {

  const todo = await prisma.todo.findFirst({ where: { id }})

  if ( !todo ) {
    throw `Todo con el id ${id} no ha sido encontrado`
  }

  const updatedTodo = await prisma.todo.update({ where: {id}, data: {complete} });

  revalidatePath('/dashboard/server-todos'); // necesitas colocar esta linea para que se actialice el navegador, esa página,y la ruta a la cual queires que vaya
  return updatedTodo;
};
 
export const createTodo = async ( description: string ) => {
  const todo = await prisma.todo.create({ data: { description }});

  revalidatePath('/dashboard/server-todos');
  return todo;
}

// * Task: make deleted method 🟡 no he conseguido hacerlo. He puedo como arg el id, para borrar por id, pero eso no era y era a través del completed no del id
export const deletedCompleted = async () => {
  await prisma.todo.deleteMany({ where: { complete: true } });
  revalidatePath('/dashboard/server-todos');
}

/* para usar esto, he tenido que poner 👇🏼 en el next config

  experimental: {
    serverActions: true,
  },

*/
