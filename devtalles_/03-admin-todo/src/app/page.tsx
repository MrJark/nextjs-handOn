import {redirect} from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return (
    <>
      <h1 className=" text-5xl">Hola bb</h1>
    </>
  );
}
