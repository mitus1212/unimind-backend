import React, {useState, useEffect, Fragment} from "react";
import Navigation from "../Elements/Navigation/Navigation";
import Footer from "../Elements/Footer/Footer";
import BeatLoader from "react-spinners/BeatLoader";
import LoadingScreen from "../Elements/Loading";


const LandingLayout = (props) => {
  

  return (
    <>
    <Navigation />
    {props.children}
    <Footer />
    </>
  ); 
};

export default LandingLayout;
