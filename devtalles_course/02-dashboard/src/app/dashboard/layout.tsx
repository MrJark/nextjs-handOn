import { Sidebar } from "@/UI_components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <article className="text-gray-900 p-2 w-full">{children}</article>
      </div>
    </main>
  );
}
