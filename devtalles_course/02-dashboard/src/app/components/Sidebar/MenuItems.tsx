import { IoBrowsersOutline, IoCalculator } from "react-icons/io5";

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
];
