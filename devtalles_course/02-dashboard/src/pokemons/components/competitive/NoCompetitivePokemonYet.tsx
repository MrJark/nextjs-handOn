import Link from "next/link";
import React from "react";
import { IoGameController } from "react-icons/io5";

export const NoCompetitivePokemonYet = () => {
  return (
    <section className="flex flex-col h-[50ch] items-center justify-center">
      <IoGameController className="text-gray-800" size={80} />
      <article className=" flex flex-col text-center justify-center items-center">
        <p className="text-lg font-bold">You have not yet added any pokémon</p>
        <Link
          className="mt-10 size-fit bg-pink-500 text-md text-white font-bold py-1 px-3 rounded-full hover:bg-pink-700
          "
          href={"/dashboard/pokemon"}
        >
          Add one
        </Link>
      </article>
    </section>
  );
};
