import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { FaOpencart } from "react-icons/fa";

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
    icon: <FaOpencart />,
    path: "/cart",
  },
  // {
  //   title: "Sign Up",
  //   cname: "nav-links-mobile",
  //   icon: <MdOutlineAppRegistration />,
  //   path: "/signup",
  // },
];
