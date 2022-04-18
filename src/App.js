import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import Changemode from "./components/Changemode";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const loadData = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/info`
    let fetchurl = await fetch(url);
    let fetchData = await fetchurl.json();
  document.getElementById('fevicon').setAttribute('href',`${process.env.REACT_APP_IMAGE_URL+fetchData.data.image}`);

  }
  
  // this for animation
  useEffect(() => {
    AOS.init();
  loadData()

  }, []);

  return (
    <>
    <ToastContainer/>
<div className="goldenrod inner_mode">
      <ScrollToTop />
      <Routes />
      <Changemode/>
      </div>
    </>
  );
};

export default App;
