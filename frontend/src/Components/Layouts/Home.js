import React from "react";
import Navigation from "../Elements/Navigation/Navigation";
import Footer from "../Elements/Footer/Footer";

const LandingLayout = (props) => (
  <>
    <Navigation />
    {props.children}
    <Footer />
  </>
);

export default LandingLayout;
