// 'use client'

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";


// si está el use client arriba, los metas no funcionan y pierde efectividad a la hora de ranckear
export const metadata = {
 title: 'Server Actions',
 description: 'SEO Title',
};


export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  // si lo haces del lado del cliente sería con el effect y a través del 'use client' pero si lo haces desde el servidor, puedes traer los todos de, en este caso, prisma 👆🏽
  // useEffect(() => { // dentro de un useEffect no se puede usar un await por tanto, la única forma es a través del fetch
  //   fetch('/api/todos')
  //     .then( resp => resp.json())
  //     .then()
  // }, [])
  

  return (
    <div>
      <span className="text-xl text-red-500 font-bold">Server Actions (Alpha)</span>
      <div className="w-full px-5 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos}/>
    </div>
  );
}
