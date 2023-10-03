"use client";

import {SessionProvider} from "next-auth/react"; // el route puede cambiar a authjs

interface Props {
  children: React.ReactNode;
}
export function AuthProvider({children, ...rest}: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
