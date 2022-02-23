import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./hocs/Layout";
import Home from "./Views/Home/Home";
import Blog from "./Views/Blog/Blog";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Category from "./Components/Category/Category";

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/guilds" />
        <Route exact path="/category/:id" component={Category} />
        <Route exact path="/blog/:id" component={BlogDetail} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
