import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-fill justify-center text-sm mb-10 antialiased font-bold">
      <Link href="/">
        <ul className={` ${titleFont.className} flex gap-1`}>
          <li>Tesla ©</li>
          <li>{new Date().getFullYear()}</li>
        </ul>
      </Link>
      <Link href="/" className=" ml-6">
        <ul
          className={`${titleFont.className} flex gap-6 text-sm antialiased font-bold`}
        >
          <li>Privacy & Legal</li>
          <li>Vehicle Recalls</li>
          <li>Contact</li>
          <li>News</li>
          <li>Get Updates</li>
          <li>Locations</li>
        </ul>
      </Link>
    </footer>
  );
};
