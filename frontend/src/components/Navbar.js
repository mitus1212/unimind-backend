import React from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const navbar = () => (
  <navigation>
    <Link to="/" className="logo__container">
      <span className="logo__text">UNIMIND</span>
    </Link>

    <ul className="nav__links">
      <NavLink className="nav__item" to="/">
        Home
      </NavLink>
      <NavLink className="nav__item" exact to="/blog">
        Blog
      </NavLink>
      <NavLink className="nav__item" to="/guilds">
        Guilds
      </NavLink>
    </ul>

    <div className="media__container">
      <a
        className="media__item"
        rel="noopener noreferrer"
        target="_blank"
        href="https://discord.gg/dkRDuzF43W"
      >
        <i className="fab fa-discord"></i>
      </a>
      <a
        className="media__item"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.youtube.com/channel/UChg6fu3P7qqHJedobi_ALoA"
      >
        <i className="fab fa-youtube"></i>
      </a>
      <a
        className="media__item"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjTwv3Yjuz1AhWltYsKHTmmDkYQFnoECAYQAQ&url=https%3A%2F%2Ftwitter.com%2FUnimindDAO&usg=AOvVaw0ih4xp3qAh8AJjOdl8uB90"
      >
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  </navigation>
);

export default navbar;
