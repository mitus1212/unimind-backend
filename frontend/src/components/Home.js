import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const home = () => (
  <header className="header__wrapper">
    <h1 className="header__title">
      Lorem Ipsum, <br></br> &nbsp;Dolor Sir amet
    </h1>
    <p className="header__description">
      Suspendiss leo tortor, ultricies et ehestas vel, rhoncus ut <br></br>
      magna. In hac habitasse platea dictumst.
    </p>
    <a href="#" className="header__button">
      Join
    </a>
  </header>
);

export default home;
