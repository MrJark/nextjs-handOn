import { CartCounter } from "@/app/shopping-cart/components";
import { Metadata } from "next";
// import { useState } from "react"


//! la metadata SOLO puede estar en la parte del servidor por tanto, es más importate aun tener dividido los componentes en la parte del servidor y del cliente
export const metadata:Metadata = { 
 title: 'Counter Page',
 description: 'A simple counter',
 authors: [
  {name: 'mrjark', url:'https://linkedin.com/in/mrjark'},
 ],
};

export default function Counter() {

  // Comento la  parte del state y me lo llevo a otro archivo porque es mala práctica tener muchos compoenentes en la parte del cliente. Tan solo deben estar aquellos mínimos necesarios, como en este caso aquellos componentes que usen el state
  // const [counter, setCounter] = useState(10);

  // const pushCounter = ( value: number) => {
  //   setCounter( prev => ( prev + value ));
  // }
  // tarea: hacer que fucnione el counter ✅
  return (
    <div className="flex flex-col items-center justify-between py-8 w-full h-80">
      <span className=" text-4xl text-white">Pruduct Cart</span>
      <CartCounter/>
      {/* <span className="text-8xl">{counter}</span>
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
      </div> */}
    </div>
  )
}
