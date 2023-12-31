import { Footer, SiderBar, TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <SiderBar />
      <div className="px-0 sm:px-5">{children}</div>
      <Footer />
    </main>
  );
}
