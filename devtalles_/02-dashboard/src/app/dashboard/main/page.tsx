import { SimpleWidget } from "@/src/components";



export const metadata = {
 title: 'Admin Dashboard',
 description: 'Admin Dashboard',
};

export default function Main() {
  return (
    <div className="flex flex-col items-center text-gray-200">
      <h1 className="mt-2 text-3xl font-medium">Dashboard</h1>

      <div className="flex flex-wrap items-center justify-center mt-12">
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
        <SimpleWidget />
      </div>
    </div>
  )
}
