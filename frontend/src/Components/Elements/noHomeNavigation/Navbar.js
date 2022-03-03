import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

// import logo from "../../assets/images/unimind_logo.png";

const Navbar = ({ isOpen, toggleSidebar }) => {
  const hamburgerStyle = isOpen
    ? "navbar__button__component navbar__button__component--active"
    : "navbar__button__component";

  return (
    <Fragment>
      <nav className="navbar">
        <NavLink className="navbar__link navbar__link__logo" to="/">
          Unimind.
        </NavLink>
        <ul className="navbar__list">
          <li className="navbar__list__item">
            <NavLink className="navbar__link" to="/">
              Home
            </NavLink>
          </li>
        </ul>

        <div className="navbar__media">
          <a
            className="navbar__media__item"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjTwv3Yjuz1AhWltYsKHTmmDkYQFnoECAYQAQ&url=https%3A%2F%2Ftwitter.com%2FUnimindDAO&usg=AOvVaw0ih4xp3qAh8AJjOdl8uB90"
          >
            <i className="fab fa-twitter"></i>
          </a>
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
        </div>

        <button className="navbar__button" onClick={toggleSidebar}>
          <div className={`${hamburgerStyle}`}></div>
          <div className={`${hamburgerStyle}`}></div>
          <div className={`${hamburgerStyle}`}></div>
        </button>
      </nav>
    </Fragment>
  );
};

export default Navbar;
