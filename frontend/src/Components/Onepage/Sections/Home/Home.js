import React, { useEffect } from "react";
import Navigation from "../../../Elements/Navigation/Navigation";

const Home = () => {
  return (
    <>
      <section className="home_container" id="home__view">
        <header className="header__wrapper">
          <h1 className="header__title">Unimind DAO</h1>
          <p className="header__description">
            Najlepsza społeczność Web3 w Polsce
          </p>
          <a
            className="header__button"
            rel="noopener noreferrer"
            target="_blank"
            href="https://discord.gg/dkRDuzF43W"
          >
            WIĘCEJ
          </a>
        </header>
      </section>
    </>
  );
};

export default Home;
