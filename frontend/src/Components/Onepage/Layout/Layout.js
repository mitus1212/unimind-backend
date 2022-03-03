import React from "react";
import Home from "../Sections/Home/Home";
import Mission from "../Sections/Mission/Mission";
import Team from "../Sections/Team/Team";
import Navigation from "../../Elements/Navigation/Navigation";

const LandingLayout = () => (
  <>
    <Navigation />
    <Home />
    <Mission />
    <Team />
  </>
);

export default LandingLayout;
