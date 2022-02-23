import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ toggleSidebar }) => (
  <nav className="navbar">
    <div className="navbar__logo">
      <Link className="navbar__logo__link" to="/">
        UNIMIND.DAO
      </Link>
    </div>
    <ul className="navbar__list">
      <li className="navbar__list__item">
        <NavLink className="navbar__link" exact to="/">
          Home
        </NavLink>
      </li>
      <li className="navbar__list__item">
        <NavLink className="navbar__link" to="/blog">
          Blog
        </NavLink>
      </li>
      <li className="navbar__list__item">
        <NavLink className="navbar__link" to="/about">
          About
        </NavLink>
      </li>
    </ul>

    <div className="navbar__media">
      <a
        className="navbar__media__item"
        rel="noopener noreferrer"
        target="_blank"
        href="https://discord.gg/dkRDuzF43W"
      >
        <i className="fab fa-discord"></i>
      </a>
      <a
        className="navbar__media__item"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.youtube.com/channel/UChg6fu3P7qqHJedobi_ALoA"
      >
        <i className="fab fa-youtube"></i>
      </a>
      <a
        className="navbar__media__item"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjTwv3Yjuz1AhWltYsKHTmmDkYQFnoECAYQAQ&url=https%3A%2F%2Ftwitter.com%2FUnimindDAO&usg=AOvVaw0ih4xp3qAh8AJjOdl8uB90"
      >
        <i className="fab fa-twitter"></i>
      </a>
    </div>
    <div className="navbar__button" onClick={toggleSidebar}>
      <div className="navbar__button__component"></div>
      <div className="navbar__button__component"></div>
      <div className="navbar__button__component"></div>
    </div>
  </nav>
);

export default Navbar;
