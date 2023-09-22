'use client'
import { useAppDispatch, useAppSelector } from "@/src/store";
import { addOne, initCounterState, substractOne } from "@/src/store/counter/counterSlice";
import { count } from "console";
import { useEffect, useState } from "react";

// OJO, PARA USAR EL REDUCER NECESITA ESTAR DEL LADO DEL CLIENTE

interface Props {
    value?: number,
}

interface CounterResponse {
    method: string,
    count: number,
}
  
const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter')
        .then( res => res.json() );

    console.log(data);
    
    return data;
    // return data as CounterResponse; // otra forma de tipar y quitas el :Promise<CounterResponse>
}

export const CartCounter = ( { value = 0 }:Props ) => {
    // const [counter, setCounter] = useState(value);

    const count = useAppSelector( state => state.counter.count); // tendrá el valor de 2 que es el que le he dado en el counterSlice
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     dispatch( initCounterState( value ));
    // }, [dispatch, value]);
    

    useEffect(() => {
        getApiCounter()
        .then( ({count}) => dispatch( initCounterState(count) ))
    }, [dispatch])

    // const pushCounter = ( value: number) => {
    //   setCounter( prev => Math.max( prev + value, 0 )); // con una sola función a través del value, le digo que me haga la cuenta y además, que elija entre el mayor del value o cero y con esto esvito que sean números negativos
    // }
    return (
        <>
            <span className="text-8xl">{count}</span>
            <div className=" flex ">
            <button
                // onClick={()=>pushCounter(1)}
                onClick={()=> dispatch( addOne() )}
                className=" flex items-center justify-center p-2 rounded-xl bg-gray-300 text-xl font-semibold text-neutral-800 hover:bg-gray-500 hover:text-neutral-100 transition-all w-[100px] mr-2"
            >
            +1</button>
            <button
                // onClick={() => pushCounter(-1)}
                onClick={()=> dispatch( substractOne() )}
                className=" flex items-center justify-center p-2 rounded-xl bg-gray-300 text-xl font-semibold text-neutral-800 hover:bg-gray-500 hover:text-neutral-100 transition-all w-[100px] mr-2"
            >
            -1</button>
            </div>
        </>
    )
}
