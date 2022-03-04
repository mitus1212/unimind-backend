import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <section className="home_container" id="home__view">
        <header className="header__wrapper">
          <h1 className="header__title">Unimind DAO</h1>
          <p className="header__description">
            Najlepsza społeczność Web3 w Polsce
          </p>
          <Link
            className="header__button"
            smooth={true}
            duration={1000}
            to="mission__view"
          >
            WIĘCEJ
          </Link>
        </header>
      </section>
    </>
  );
};

export default Home;
