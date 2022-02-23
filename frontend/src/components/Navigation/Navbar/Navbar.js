import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ toggleSidebar }) => (
  <nav className="navbar">
    <ul className="navbar__list">
      <Link className="navbar__logo" to="/">
        Navbar App
      </Link>
      <li className="navbar__list__item">
        <NavLink className="navbar__link" exact to="/">
          Home
        </NavLink>
      </li>
      <li className="navbar__list__item">
        <NavLink className="navbar__link" to="/about">
          About
        </NavLink>
      </li>
      <li className="navbar__list__item">
        <NavLink className="navbar__link" to="/services">
          Services
        </NavLink>
      </li>
      <li className="navbar__list__item">
        <NavLink className="navbar__link" to="/gallery">
          Gallery
        </NavLink>
      </li>
      <li className="navbar__list__item">
        <NavLink className="navbar__link" to="/contact">
          Contact
        </NavLink>
      </li>
      <div className="navbar__button" onClick={toggleSidebar}>
        <div className="navbar__button__component"></div>
        <div className="navbar__button__component"></div>
        <div className="navbar__button__component"></div>
      </div>
    </ul>
  </nav>
);

export default Navbar;
