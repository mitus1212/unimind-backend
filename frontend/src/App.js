import React, { useState, useEffect } from "react";
import "../src/sass/main.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";
import LoadingScreen from "./Components/Elements/Loading";
import ScrollToTop from "./Components/Utilities/Utilities";

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

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      
    }, 3000)
  }, []);

  return (
  
    
    <>
    { loading ? (
    <LoadingScreen>
      <BeatLoader color="white" loading={loading} size={10} />
    </LoadingScreen>
    
  ) : (
    <>
    <Router>
    <ScrollToTop>
      <AppRoute exact path="/" layout={LandingLayout} component={Landing} />
      <AppRoute exact path="/news" layout={defaultLayout} component={Blog} />
      <AppRoute exact path="/news/:id" layout={defaultLayout} component={BlogDetail} />
      </ScrollToTop>
    </Router>
    </>
    )}

  </>


  )};

export default App;
