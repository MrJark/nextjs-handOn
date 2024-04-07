import {
  IoBasketball,
  IoBrowsersOutline,
  IoCalculator,
  IoGameController,
} from "react-icons/io5";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoBrowsersOutline size={40} />,
    title: "Dashboard",
    subtitle: "General dashboard",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculator size={40} />,
    title: "Counter",
    subtitle: "Counter client side",
  },
  {
    path: "/dashboard/pokemon",
    icon: <IoBasketball size={40} />,
    title: "Pokemon",
    subtitle: "Pokedex page",
  },
  {
    path: "/dashboard/competitive",
    icon: <IoGameController size={40} />,
    title: "Competitive",
    subtitle: "Competitive page",
  },
];
