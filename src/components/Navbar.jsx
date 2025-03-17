import React from "react";
import { Link } from "react-scroll";  
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="home" smooth={true} duration={800} offset={-80} className="logo">Jaruporn</Link>
      <ul className="menu">
        <li><Link to="home" smooth={true} duration={800} offset={-80}>Home</Link></li>
        <li><Link to="about-me" smooth={true} duration={800} offset={-80}>About Me</Link></li>
        <li><Link to="information" smooth={true} duration={800} offset={-80}>Information</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
