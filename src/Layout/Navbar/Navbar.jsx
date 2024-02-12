/* eslint-disable react/prop-types */
import { FaReact } from "react-icons/fa";
import "./Navbar.css"
import { useState } from "react";
import { MenuData } from "../Menudata/Menudata";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className='navbarItems'>
      <h1 className='logo'>
        React{" "}
        <i className='logo-icon'>
          <FaReact />
        </i>
      </h1>
      <div className='menu-icons'>
        <i
          onClick={handleClick}
          className={isClicked ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={isClicked ? 'nav-menu active' : "nav-menu" }>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className={item.cname} exact to={item.path}>
                {item.icon} {item.title}
              </NavLink>
              {/* <a href='#' className={item.cname}>
                {item.icon} {item.title}
              </a> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
