"use client";

import {useSession} from "next-auth/react"; // el path puede cambiar a authjs

export default function ProfilePage() {
  const {data: session} = useSession(); // el useSession necesita un userProvider que lo envuelva y lo tienes que tener en la parte más alta de la app y esa es el layout. Te creas un AuthProvider que envuelva toda ella

  return (
    <div>
      <div className="flex flex-col bg-gray-100 rounded px-4 py-8 shadow-xl shadow-blue-100">
        <span>{session?.user?.name ?? "No name"}</span>
        <span>{session?.user?.email ?? "No email"}</span>
        <span>{session?.user?.image ?? "No image"}</span>
        <span>{session?.user?.id ?? "No uuid"}</span>
        <span>{session?.user?.roles ?? "User"}</span>
      </div>
    </div>
  );
}
