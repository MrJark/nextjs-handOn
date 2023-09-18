
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center p-24">
        <span className=" text-3xl">Layout Page</span>
      { children } {/* si no ponnes el children, no se renderizará el page, solo el laypout ya que este ese el HOC más alto de esta ruta */}
      </main>
  );
}