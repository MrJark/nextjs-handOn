import {
  CommentDiscussionIcon,
  CreditCardIcon,
  HomeIcon,
  PeopleIcon,
} from "@primer/octicons-react";

export const navItems = [
  {
    path: "./",
    text: "Home",
    icon: <HomeIcon className="text-white mr-1" />,
  },
  {
    path: "./about",
    text: "About",
    icon: <PeopleIcon className="text-white mr-1" />,
  },
  {
    path: "./pricese",
    text: "Prices",
    icon: <CreditCardIcon className="text-white mr-1" />,
  },
  {
    path: "./contact",
    text: "Contact",
    icon: <CommentDiscussionIcon className="text-white mr-1" />,
  },
];
