import { SimpleCardWidget } from "../../../UI_components/widgets/SimpleCardWidget";
export default function Main() {
  return (
    <section className="text-gray-800 p-2 ">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <article className="flex flex-wrap p-2 items-center justify-center">
        <SimpleCardWidget />
      </article>
    </section>
  );
}
