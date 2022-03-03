import React from "react";
import "../src/sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// views
// import Home from "./Views/Home/Home";
import Blog from "./Components/Blog/Blog/Blog";
import LandingLayout from "./Components/Onepage/Layout/Layout";
// import Team from "./Views/Team/Team";
// import Mission from "./Views/Mission/Mission";
// import Guilds from "./Views/Guilds/Guilds";

// components (if id)
import BlogDetail from "./Components/Blog/BlogDetail/BlogDetail";
import Category from "./Components/Blog/Category/Category";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingLayout} />
      <Route exact path="/news" component={Blog} />
      <Route exact path="/news/:id" component={BlogDetail} />
    </Switch>
  </Router>
);

export default App;
