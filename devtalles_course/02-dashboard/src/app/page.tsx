import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard/main"); // redirección directa al dashboard
  // return (
  //   <>
  //     <h1>Hola bb</h1>
  //   </>
  // );
}
