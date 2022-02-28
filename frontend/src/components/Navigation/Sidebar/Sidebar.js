import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFileEarmarkPostFill } from "react-icons/bs";
import { FaInfo } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GiStoneCrafting } from "react-icons/gi";
import { FaBell } from "react-icons/fa";

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
          <NavLink className="sidebar__link" exact to="/team">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <MdPeople className="sidebar__icon" />
              Team
            </li>
          </NavLink>
          <NavLink className="sidebar__link" exact to="/mission">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <AiFillStar className="sidebar__icon" />
              Mission
            </li>
          </NavLink>
          <NavLink className="sidebar__link" exact to="/guilds">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <GiStoneCrafting className="sidebar__icon" />
              Guilds
            </li>
          </NavLink>
          <NavLink className="sidebar__link" exact to="/blog">
            <li className="sidebar__list__item" onClick={closeSidebar}>
              <FaBell className="sidebar__icon" />
              News
            </li>
          </NavLink>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
