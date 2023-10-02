import Image from "next/image";
import Link from "next/link";
import {CiLogout} from "react-icons/ci";
import {LiaCookieSolid} from "react-icons/lia";
import {
  IoBasketball,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
} from "react-icons/io5";
import {SidebarItem} from ".";
import path from "path";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest Todos",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Servers Todos",
    path: "/dashboard/server-todos",
  },
  {
    icon: <LiaCookieSolid />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoBasketball />,
    title: "Products",
    path: "/dashboard/products",
  },
];

export async function Sidebar() {
  //* Task: tener la sesión en el sidebar a través del auth de github ✅
  const session = await getServerSession(authOptions); // para recuperar la sesión del userç

  if (!session) {
    redirect("/api/auth/signin");
  }
  const {user} = session;

  // Voy a hacer las validaciones por si los usuarios tienen o no una image, un nombre y un rol
  const avatarURL = user?.image
    ? session.user?.image
    : "https://unavatar.io/microlink/microlink.io";
  const userName = user?.name?.toLowerCase() ?? "No name";
  // const userROLE = "";

  return (
    <>
      {/* TODO: src/components <Sidebar /> */}
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            {/* TODO: Next/Link hacia dashboard */}
            <Link href="/dashboard" title="home">
              {/* Next/Image */}
              <Image
                src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
                className="w-24"
                alt="tailus logo"
                width={32}
                height={32}
              />
            </Link>
          </div>

          <div className="mt-8 text-center">
            {/* Next/Image */}
            <Image
              // src={`${user?.image}`}
              src={avatarURL!}
              alt="mrjark picture"
              className="w-12 h-12 m-auto rounded-full object-cover lg:w-16 lg:h-16"
              width={26}
              height={26}
            />
            <h5 className="hidden mt-4 text-2xl tracking-wider font-semibold text-gray-600 lg:block">
              {userName}
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>
          <ul className="space-y-2 tracking-wide mt-8">
            {menuItems.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))}
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
