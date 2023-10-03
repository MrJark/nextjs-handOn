"use client";

import {useSession} from "next-auth/react"; // la ruta puede cambiar
import {CiLogout} from "react-icons/ci";
import {BiLoader} from "react-icons/bi";

export const LogoutBtn = () => {
  const {data: session, status} = useSession();
  // console.log(status);

  if (status === "loading") {
    return (
      <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
        <BiLoader />
        <span className="group-hover:text-gray-700">Witing...</span>
      </button>
    );
  }

  return (
    <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
      <CiLogout />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
};
