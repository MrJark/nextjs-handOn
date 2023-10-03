"use client";

import {useSession} from "next-auth/react"; // el path puede cambiar a authjs

export default function ProfilePage() {
  const {data: session} = useSession(); // el useSession necesita un userProvider que lo envuelva y lo tienes que tener en la parte más alta de la app y esa es el layout. Te creas un AuthProvider que envuelva toda ella

  return (
    <div>
      <h1>Hello Page</h1>
      <div className="flex flex-col"></div>
    </div>
  );
}
