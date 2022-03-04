import React, { Component } from "react";
import "../src/sass/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";

// views
import Blog from "./Components/Blog/Blog/Blog";
import Landing from "./Components/Onepage/Landing";

// layouts
import defaultLayout from "./Components/Layouts/NoHome";
import LandingLayout from "./Components/Layouts/Home";


// components (if id)
import BlogDetail from "./Components/Blog/BlogDetail/BlogDetail";

const AppRoute = ({component:Component, layout:Layout, ...rest }) => (
  <Route {...rest} render={props=>(
    <Layout><Component  {...props}> </Component></Layout>
  )}></Route>
)

const App = () => (

  <Router>
      <AppRoute exact path="/" layout={LandingLayout} component={Landing} />
      <AppRoute exact path="/news" layout={defaultLayout} component={Blog} />
      <AppRoute exact path="/news/:id" layout={defaultLayout} component={BlogDetail} />
  </Router>


);

export default App;
