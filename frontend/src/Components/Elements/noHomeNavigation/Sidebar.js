import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

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
          <div className="sidebar__logo">Unimind</div>

          <NavLink className="sidebar__link" exact to="/">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <AiFillHome className="sidebar__icon" />
              Home
            </li>
          </NavLink>
          <a
            target="_blank"
            className="sidebar__link"
            rel="noreferrer"
            href="https://webtrzy.xyz"
          >
            <li className="sidebar__list__item" onClick={closeSidebar}>
              Webtrzy.xyz
            </li>
          </a>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
