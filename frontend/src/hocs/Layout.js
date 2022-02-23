import React from "react";
import Navigation from "../components/Navigation";

const layout = (props) => (
  <div>
    <Navigation />
    {props.children}
  </div>
);

export default layout;
