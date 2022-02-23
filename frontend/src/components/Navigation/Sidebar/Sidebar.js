import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const styles = isOpen ? "sidebar sidebar--open" : "sidebar sidebar--closed";

  return (
    <Fragment>
      {isOpen ? (
        <div className="sidebar__backdrop" onClick={closeSidebar}></div>
      ) : (
        <Fragment></Fragment>
      )}
      <nav className={`${styles}`}>
        <ul className="sidebar__list">
          <div className="sidebar__logo">Navbar App</div>
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" to="/about">
              About
            </NavLink>
          </li>
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" to="/services">
              Services
            </NavLink>
          </li>
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" to="/gallery">
              Gallery
            </NavLink>
          </li>
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
