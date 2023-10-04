// 'use client'
export const dynamic = "force-dynamic"; // esto es para decirle a Next que el caché sea dinámico, es decir, que busque en el store pero que también haga las peticiones

import prisma from "@/app/lib/prisma";
import {getUserSessionServer} from "@/auth/actions/authActions";
import {NewTodo, TodosGrid} from "@/todos";
import {redirect} from "next/navigation"; // ojo a la ruta

// si está el use client arriba, los metas no funcionan y pierde efectividad a la hora de ranckear
export const metadata = {
  title: "TODO List",
  description: "SEO Title",
};

export default async function RestTodoPage() {
  // estas tres lineas siguientes es para que los todos sean únicos por cada usuario
  const user = await getUserSessionServer();
  if (!user) redirect("api/auth/sigin");
  const todos = await prisma.todo.findMany({
    where: {userId: user.id},
    orderBy: {description: "asc"},
  });

  // const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })

  // si lo haces del lado del cliente sería con el effect y a través del 'use client' pero si lo haces desde el servidor, puedes traer los todos de, en este caso, prisma 👆🏽
  // useEffect(() => { // dentro de un useEffect no se puede usar un await por tanto, la única forma es a través del fetch
  //   fetch('/api/todos')
  //     .then( resp => resp.json())
  //     .then()
  // }, [])

  return (
    <div>
      <div className="w-full px-5 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
