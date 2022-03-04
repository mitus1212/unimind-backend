import React, { useEffect } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      <section data-aos="fade-in" className="home_container" id="home__view">
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
