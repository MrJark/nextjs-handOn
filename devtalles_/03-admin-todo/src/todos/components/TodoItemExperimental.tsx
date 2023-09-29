'use client'
/**
  * El uso de useOptimistic es para tener una UX mejor ya que hace el render, o el toggle en este caso, al instante pero la llamada al backend no lo es.
  *  
*/
import { experimental_useOptimistic as useOptimistic } from 'react'

import style from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'

import { Todo } from '@prisma/client'

interface Props {
    todo: Todo,
    toggleTodo: ( id: string, complete: boolean ) => Promise< Todo | void >,
}

export const TodoItemExperimental = ({ todo, toggleTodo }: Props) => {

    // (/https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#optimistic-updates)
    const [ todoOptimistic, toggleOptimistic ] = useOptimistic(
        todo,
        ( state, newCompleteValue: boolean ) => ({ ...state, complete: newCompleteValue }) // esta función teine que regresar un nuevo estado par ael todo o state ( en este caso son los mismos )
    );

    const onToggleTodo = async () => {
        toggleOptimistic( !todoOptimistic.complete ); // devuelve el último varlor del todo

        try {
            await toggleTodo( todoOptimistic.id, !todoOptimistic.complete );
        } catch (error) {
            toggleOptimistic( !todoOptimistic.complete );
        }
    }

  return (
    <div className={ todoOptimistic.complete ? style.todoDone : style.todoPending } >   
        <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
            <div 
                // onClick={() => toggleTodo( todo.id, !todo.complete )}
                onClick={() => onToggleTodo()}
                className={` 
                    flex p-2 rounded-md cursor-pointer  hover:bg-opacity-50
                    ${ todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'}
                `}
            >
                {
                    todoOptimistic.complete 
                    ? <IoCheckboxOutline size={30} />
                    : <IoSquareOutline size={30} />
                }
            </div>

            <div className='text-center sm:text-left'>
                { todoOptimistic.description }
            </div>
        </div>
    </div>
  )
};
