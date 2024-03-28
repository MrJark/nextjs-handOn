import Image from "next/image";
import { Sidebar } from "../components/Sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <main className="flex">
        <Sidebar />
        <div className="text-gray-900">{children}</div>
      </main>
    </div>
  );
}
