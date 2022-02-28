import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <section className="home_container">
    <header className="header__wrapper">
      <h1 className="header__title">
        Lorem Ipsum, <br></br> &nbsp;Dolor Sir amet
      </h1>
      <p className="header__description">
        Suspendiss leo tortor, ultricies et ehestas vel,<br></br> rhoncus ut
        magna. In hac habitasse platea.
      </p>
      <a
        className="header__button"
        rel="noopener noreferrer"
        target="_blank"
        href="https://discord.gg/dkRDuzF43W"
      >
        JOIN
      </a>
    </header>
  </section>
);

export default Home;
