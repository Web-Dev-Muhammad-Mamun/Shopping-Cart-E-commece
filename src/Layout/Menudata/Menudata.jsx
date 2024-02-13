import { FaHome } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { MdOutlineAppRegistration } from "react-icons/md";

export const MenuData = [
  {
    title: "Home",
    cname: "nav-links",
    icon: <FaHome />,
    path: "/",
  },
  {
    title: "About",
    cname: "nav-links",
    icon: <FcAbout />,
    path: "/about",
  },
  {
    title: "Cart",
    cname: "nav-links",
    icon: <MdOutlineTour />,
    path: "/cart",
  },
  // {
  //   title: "Sign Up",
  //   cname: "nav-links-mobile",
  //   icon: <MdOutlineAppRegistration />,
  //   path: "/signup",
  // },
];
