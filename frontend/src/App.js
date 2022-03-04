import React, { Component } from "react";
import "../src/sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// views
// import Home from "./Views/Home/Home";
import Blog from "./Components/Blog/Blog/Blog";
import Landing from "./Components/Onepage/Landing";
// import Team from "./Views/Team/Team";
// import Mission from "./Views/Mission/Mission";
// import Guilds from "./Views/Guilds/Guilds";

// layouts
import defaultLayout from "./Components/Layouts/NoHome";
import LandingLayout from "./Components/Layouts/Home";


// components (if id)
import BlogDetail from "./Components/Blog/BlogDetail/BlogDetail";
import Category from "./Components/Blog/Category/Category";

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

  // <Router>
  //   <Switch>    
  //       <Route exact path="/news" component={Blog} />
  //       <Route exact path="/news/:id" component={BlogDetail} />
  //       <Route exact path="/" component={LandingLayout} />
  //   </Switch>
  // </Router>
);

export default App;
