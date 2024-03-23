export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-pink-500">
        Hello to <span className="italic font-bold">The Growth Boy</span>{" "}
        Podcast
      </h1>
      {children}
    </main>
  );
}
