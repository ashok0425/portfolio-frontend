import React from "react";
import NotFound from "../views/NotFound";
import Index from "../components/about/Index";
import Home from "../components/Home";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";
import Navbar from "../components/Navbar";

const Routes = () => {
  return (
    <>
      <Router>
        <ScrollTopBehaviour />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" >
       <Index heading={'ABOUT <span>ME</span>'} subheading={'Resume'}/>
            </Route>


          <Route exact path="/portfolio" >
            <Portfolio  heading={'my <span>Portfolio</span>'} subheading={'works'}/>
            </Route>
          <Route exact path="/contact" >
            <Contact  heading={'get in <span>touch</span>'} subheading={'Contact'}/>
            </Route>
          <Route  path="*" component={NotFound} />
        </Switch>

{/* Nabar component  */}
      <Navbar/>

      </Router>
    </>
  );
};

export default Routes;
      