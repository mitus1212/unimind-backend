import React, {useState, useEffect, Fragment} from "react";
import Navigation from "../Elements/Navigation/Navigation";
import Footer from "../Elements/Footer/Footer";
import BeatLoader from "react-spinners/BeatLoader";
import LoadingScreen from "../Elements/Loading";


const LandingLayout = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      
    }, 3000)
  }, []);

  return (
    <>

    {loading ? (
      <LoadingScreen>
      <BeatLoader color="white" loading={loading} size={10} />
      </LoadingScreen>
    ) : (
     <>
    <Navigation />
    {props.children}
    <Footer />
    </>
    )}
    
  </>
  );
  
};

export default LandingLayout;
