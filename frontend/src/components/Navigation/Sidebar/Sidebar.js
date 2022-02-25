import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { BsFileEarmarkPostFill } from 'react-icons/bs';
import { FaInfo } from 'react-icons/fa';


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
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" exact to="/">
            <AiFillHome className="sidebar__icon" />Home
            </NavLink>
          </li>
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" to="/blog">
            <BsFileEarmarkPostFill className="sidebar__icon" />Blog
            </NavLink>
          </li>
          <li className="sidebar__list__item" onClick={closeSidebar}>
            <NavLink className="sidebar__link" to="/about">
            <FaInfo className="sidebar__icon" />About
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Sidebar;
