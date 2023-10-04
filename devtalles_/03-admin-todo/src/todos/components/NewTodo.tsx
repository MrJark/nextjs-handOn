"use client";

import {FormEvent, useState} from "react";
import {IoTrashOutline} from "react-icons/io5";

import * as todosApi from "@/todos/helpers/todos";
// import { useRouter } from 'next/navigation'; // del next/navigation

// server action
import {createTodo, deletedCompleted} from "@/todos/actions/todoActions";
import {useRouter} from "next/navigation"; // ojo a la ruta

export const NewTodo = () => {
  const router = useRouter(); // puedo eliminar esta línea, y por tanto tdoas sus llamadas gracias al server action
  const [description, setDescription] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    // console.log(description);
    // await todosApi.createTodo(description); // sustituyo esta línea por el server action

    // await createTodo(description); // server action
    await todosApi.createTodo(description); // a través de result api
    router.refresh();

    setDescription("");
  };

  // const deleteCompleted = async () => { // para hacer el server action no me hace falta esta función
  //   await todosApi.deleteCompletedTodo()

  //   // router.refresh();
  // }

  return (
    <form onSubmit={onSubmit} className="flex w-full">
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={() => deletedCompleted()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all">
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
