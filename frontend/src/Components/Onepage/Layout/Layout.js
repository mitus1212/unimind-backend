import React from "react";
import Home from "../Sections/Home/Home";
import Mission from "../Sections/Mission/Mission";
import Team from "../Sections/Team/Team";
import Navigation from "../../Elements/Navigation/Navigation";
import Footer from "../../Elements/Footer/Footer";

const LandingLayout = () => (
  <>
    <Navigation />
    <Home />
    <Mission />
    <Team />
    <Footer />
  </>
);

export default LandingLayout;
