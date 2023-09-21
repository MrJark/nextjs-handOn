'use client'
import { useState } from "react";


interface Props {
    value?: number,
}

export const CartCounter = ( { value = 0 }:Props ) => {
    const [counter, setCounter] = useState(value);

    const pushCounter = ( value: number) => {
      setCounter( prev => Math.max( prev + value, 0 )); // con una sola función a través del value, le digo que me haga la cuenta y además, que elija entre el mayor del value o cero y con esto esvito que sean números negativos
    }
    return (
        <>
            <span className="text-8xl">{counter}</span>
            <div className=" flex ">
            <button
                onClick={()=>pushCounter(1)}
                className=" flex items-center justify-center p-2 rounded-xl bg-gray-300 text-xl font-semibold text-neutral-800 hover:bg-gray-500 hover:text-neutral-100 transition-all w-[100px] mr-2"
            >
            +1</button>
            <button
                onClick={() => pushCounter(-1)}
                className=" flex items-center justify-center p-2 rounded-xl bg-gray-300 text-xl font-semibold text-neutral-800 hover:bg-gray-500 hover:text-neutral-100 transition-all w-[100px] mr-2"
            >
            -1</button>
            </div>
        </>
    )
}
