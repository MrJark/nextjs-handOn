import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
  keywords: ["About mrjark", "Patatas con jamón", "information"],
  creator: "mrjark",
};

export default function About() {
  return (
    <>
      <span className="text-2xl">About</span>
    </>
  );
}
