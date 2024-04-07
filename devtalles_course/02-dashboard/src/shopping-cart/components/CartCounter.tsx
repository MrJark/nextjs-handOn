"use client"; // los reducer funcionan del lado del cliente

import { useAppDispatch, useAppSelector } from "@/store";
import { getAPICounter } from "@/store/counter";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  // const [count, setCount] = useState(value); // lo elimino porque estoy usando el CounterReducer de Redux
  // esto viene del CounterReducer
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   // uso este hook para llamar un efecto para cunado el componente sea creado, es decir, depende del value, que es lo que le mando al componente como prop opcional, y el dispatch que es la acción para comunicarse con el store
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);
  useEffect(() => {
    getAPICounter().then((data) => dispatch(initCounterState(data.count))); // lo hago así porque un useEffect no puede ser async
  }, [dispatch]);

  return (
    <section className="grid place-items-center">
      <span className="text-9xl">{count}</span>
      <section className="flex gap-2">
        <button
          // onClick={() => setCount(count + 1)}
          onClick={() => dispatch(addOne())} // viene del reducer
          className="flex items-center justify-center p-2 rounded-xl border bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 transition-all w-[100px] "
        >
          +1
        </button>
        <button
          // onClick={() => setCount(count - 1)}
          onClick={() => dispatch(substractOne())} // viene del reducer
          className="flex items-center justify-center p-2 rounded-xl border bg-gray-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:border-gray-900 transition-all w-[100px] "
        >
          -1
        </button>
      </section>
    </section>
  );
};
