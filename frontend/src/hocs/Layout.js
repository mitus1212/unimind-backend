import React from "react";
import Navigation from "../Components/Navigation/Navigation";

const layout = (props) => (
  <div>
    <Navigation />
    {props.children}
  </div>
);

export default layout;
