
export default function AboutLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout About</h1>
      { children } {/* si no ponnes el children, no se renderizará el page, solo el laypout ya que este ese el HOC más alto de esta ruta */}
    </div>
  );
}