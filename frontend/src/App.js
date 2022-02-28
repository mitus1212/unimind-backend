import React from "react";
import "../src/sass/main.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// views
import Layout from "./hocs/Layout";
// import Home from "./Views/Home/Home";
import Blog from "./Views/Blog/Blog";
// import Team from "./Views/Team/Team";
// import Mission from "./Views/Mission/Mission";
// import Guilds from "./Views/Guilds/Guilds";

// components (if id)
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Category from "./Components/Category/Category";
import Landing from "./Views/Landing/Landing";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/news" component={Blog} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
