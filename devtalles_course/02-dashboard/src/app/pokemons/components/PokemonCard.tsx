import Link from "next/link";
import React from "react";
import Image from "next/image";

import { SimplePokemon } from "../interfaces/simple-pokemon";

import {
  IoAlbumsOutline,
  IoGameControllerOutline,
  IoGameControllerSharp,
} from "react-icons/io5";
import { ButtonsPokemonCard, ImagePokemonCard } from "..";

interface Props {
  simplePokemon: SimplePokemon;
}

export const PokemonCard = ({ simplePokemon }: Props) => {
  const { id, name } = simplePokemon;

  return (
    <article className="mx-auto right-0 mt-2 w-60">
      <section className="bg-white rounded overflow-hidden shadow-lg">
        <ImagePokemonCard id={id} name={name} />
        {/* <ImagePokemonCard {...simplePokemon} />  Ambas opciones, la de arriba como esta son válidas porque tinen el mismo nombre y con el spread se puede, si no solo sería válida la de arriba*/}
        <ButtonsPokemonCard id={id} name={name} />
        {/* <ButtonsPokemonCard {...simplePokemon} /> */}

        {/* <div className="">
          <button className="w-full px-4 py-2 pb-4 hover:bg-gray-100 flex">
            <p className="text-sm font-medium text-gray-800 leading-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                className="h-4 w-4 text-gray-800 fill-current animate-spin"
                width="32"
                height="32"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"
                ></path>
              </svg>{" "}
              Logout
            </p>
          </button>
        </div> */}
      </section>
    </article>
  );
};
