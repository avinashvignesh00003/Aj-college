import React, { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import menu_icons from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

import logo from "../../assets/logo.png";
const NavBar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobilemenu, setmobilemenu] = useState(false);
  const tooglebutton = () => {
    mobilemenu ? setmobilemenu(false) : setmobilemenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobilemenu ? "mobile-menu" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={-100} duration={500}>
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          {" "}
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          {" "}
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          {" "}
          <Link to="Testimonials" smooth={true} offset={-260} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img
        src={menu_icons}
        alt=""
        className="menu-icon"
        onClick={tooglebutton}
      />
      {/* ///this menu icon is the toogle for responsive design */}
    </nav>
  );
};

export default NavBar;
