import Image from "next/image";
import { IoLogoReact } from "react-icons/io5";
import { SidebarMenu, menuItems } from "..";

export const Sidebar = () => {
  return (
    <nav
      id="menu"
      style={{ width: "300px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-56 left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-2 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-2 transition-all animate-spin duration-300" />
          <span>mrjark pages</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-6">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://unavatar.io/github/mrjark"
              alt="mrjark github avatar"
              width="20"
              height="20"
            />
          </span>
          <span className="text-sm md:text-base font-bold">Chema | mrjark</span>
        </a>
      </div>
      <section id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenu key={item.path} {...item} /> // funciona con el spread porque tiene los mismos nombres, sino tendrías que hacerlo uno por uno como 👇🏼
        ))}
        {/* {menuItems.map((item) => (
          <SidebarMenu
            key={item.path}
            path={item.path}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))} */}
      </section>
    </nav>
  );
};
