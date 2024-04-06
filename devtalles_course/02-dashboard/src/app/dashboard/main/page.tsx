import { WidgetGrid } from "@/UI_components";

export const metadata = {
  title: "Dashboard page",
  description: "Dashboard page",
};

export default function Main() {
  return (
    <section className="text-gray-800 p-2 ">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <WidgetGrid />
    </section>
  );
}
