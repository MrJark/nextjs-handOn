import {WidgetItem} from "@/components";
import {getServerSession} from "next-auth"; // este nombre y ruta pueden cambiar a directamente authjs
import {redirect} from "next/navigation"; // esta ruta

import {authOptions} from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions); // para recuperar la sesión del user

  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      {/* TODO: dashboard/page.tsx  */}
      {/* Este contenido va dentro de page.tsx */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <WidgetItem>
          <div className="flex flex-col">
            <span>{session.user?.name}</span>
            <span>{session.user?.image}</span>
            <span>{session.user?.email}</span>
          </div>
        </WidgetItem>
      </div>
      {/* TODO: fin del dashboard/page.tsx  */}
    </>
  );
}
