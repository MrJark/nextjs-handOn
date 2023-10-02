import {cookies} from "next/headers";
import {TabBar} from "@/components";

export const metadata = {
  title: "Cookies Page",
  description: "Cookies Page",
};

export default function CookiesPage() {
  // así es como funcionan las cookies en next (https://nextjs.org/docs/app/api-reference/functions/cookies)
  const cookieStore = cookies();
  const cookieTab = cookieStore.get("selectedTab")?.value ?? "1"; // el nombre selectedTab es el que le he puesto en la parte del TabBar para que haga match

  return (
    <div>
      <h1 className="text-2xl font-medium text-blue-500">Cookies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col">
          <span className=" text-3xl">Tabs</span>
          <TabBar currentTab={+cookieTab} />
          {/* pones el mas porque el currentTab debe ser un number y el cookieTab es un string pero tb se podría poner Number (cookieStore.get("selectedTab")?.value ?? "1") para transformarlo en un número y evitar poner el más en el currentTab*/}
        </div>
      </div>
    </div>
  );
}
