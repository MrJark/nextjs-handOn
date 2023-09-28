'use client'

import { Todo } from '@prisma/client'
import { TodoItem } from './TodoItem'

import * as api from '@/todos/helpers/todos'

interface Props {
    todos?: Todo[], // viene de prisma el Todo como interfaz
}

export const TodosGrid = ({ todos = [] }: Props) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
            {
                todos.map( item => (
                    <TodoItem key={item.id} todo={item} toggleTodo={ api.updateTodo }/>
                ))
            }
        </div>
    )
}
