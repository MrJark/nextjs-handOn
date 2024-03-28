import Link from "next/link";

import { ActiveLink, navHomeItem, navItems } from "..";

// me los llevo a una carpeta a parte
// const navItems = [
//   {
//     path: "./",
//     text: "Home",
//     icon: <HomeIcon className="text-white mr-1" />,
//   },
//   {
//     path: "./about",
//     text: "About",
//     icon: <PeopleIcon className="text-white mr-1" />,
//   },
//   {
//     path: "./pricese",
//     text: "Prices",
//     icon: <CreditCardIcon className="text-white mr-1" />,
//   },
//   {
//     path: "./contact",
//     text: "Contact",
//     icon: <CommentDiscussionIcon className="text-white mr-1" />,
//   },
// ];

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-500 bg-opacity-30 p-2 m-2 rounded">
      {/* <Link
        className=" flex items-center p-1 rounded hover:bg-gray-600 hover:transition-all hover:duration-300 ml-2"
        href={`/`}
      >
        <HomeIcon className="mr-1" />
        Home
      </Link>
      <Link
        className=" p-1 rounded hover:bg-gray-600 hover:transition-all hover:duration-300 ml-2 "
        href={`/about`}
      >
        <PeopleIcon className="mr-1" />
        About
      </Link>
      <Link
        className=" p-1 rounded hover:bg-gray-600 hover:transition-all hover:duration-300 ml-2"
        href={`/contact`}
      >
        Contact
      </Link>
      <Link
        className=" p-1 rounded hover:bg-gray-600 hover:transition-all hover:duration-300 ml-2"
        href={`/prices`}
      >
        Prices
      </Link> */}
      {/** Forma más sencilla de escribirlo 👇🏼 */}
      <div className="flex">
        {navHomeItem.map((homeItem) => (
          <Link
            key={homeItem.path}
            href={homeItem.path}
            className="flex items-center p-1 rounded hover:bg-gray-600 hover:transition-all hover:duration-300 ml-2"
          >
            {homeItem.icon}
            {homeItem.text}
          </Link>
        ))}
      </div>
      <div className="flex">
        {navItems.map((navItem) => (
          // <Link
          //   key={navItem.path}
          //   className=" flex items-center p-1 rounded hover:bg-gray-600 hover:transition-all hover:duration-300 ml-2"
          //   href={navItem.path}
          // >
          //   {navItem.icon}
          //   {navItem.text}
          // </Link>
          <ActiveLink key={navItem.path} {...navItem} /> // se puede con el operador o desestructurar los elementos como path={} y text={}
        ))}
      </div>
    </nav>
  );
};

// Para simplificar código y hacerlo por componentes
// interface NavbarLinks {
//   className:
//     | string
//     | [string]
//     | "p-1 rounded hover:bg-gray-600 hover:transition-all hover:duration-300 ml-2";
//   href: string;
// }
// export function NavbarLinks() {
//   return <></>;
// }
