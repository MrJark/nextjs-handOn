'use client' // no se pueden poner serve actions en aquellos componentes que sean 'use client'

import { Todo } from '@prisma/client'
import { TodoItem } from './TodoItem'

// import * as todosApi from '@/todos/helpers/todos'
import { toggleTodo } from '@/todos/actions/todoActions';
import { useRouter } from 'next/navigation'; //! Ojo Tiene que ser del next/navigation y no del next/router ya que este último es de versiones anteriores a la 13
import { TodoItemExperimental } from './TodoItemExperimental';

interface Props {
    todos?: Todo[], // viene de prisma el Todo como interfaz
};

export const TodosGrid = ({ todos = [] }: Props) => {

    // const router = useRouter();

    // NO necesito esta función porque voy a hacerlo a través del SERVER ACTION
    // const toggleTodo = async ( id: string, complete: boolean ) => {
    //     const updatedTodo = await todosApi.updateTodo( id, complete );
    //     console.log({updatedTodo});
        
    //     router.refresh(); // esto es para refrescar solo el componente en el que está sin afectar a la app en general
    // };

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {
                todos.map( item => (
                    // <TodoItem key={item.id} todo={item} toggleTodo={ toggleTodo }/>
                    <TodoItemExperimental key={item.id} todo={item} toggleTodo={ toggleTodo }/>
                ))
            }
        </div>
    )
};
