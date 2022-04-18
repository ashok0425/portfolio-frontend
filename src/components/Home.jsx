import React from "react";
import Hero from './hero/Hero'
const HomeDark = () => {
  return (
      <div className="home">
        <div
          className="container-fluid main-container container-home p-0 "
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="color-block d-none d-lg-block"></div>
          <Hero />
        </div>
      </div>
  );
};

export default HomeDark;
