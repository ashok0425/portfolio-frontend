import React,{useState,useEffect} from "react";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import Pagetitle from "../Pagetitle";
import Loader from "../Loader"
import Skills from "./Skills";
const Index = (props) => {
  const [Info, setInfo] = useState()

const loadData = async () => {
  let url = `${process.env.REACT_APP_BASE_URL}/info`
  let fetchurl = await fetch(url);
  let fetchData = await fetchurl.json();
  console.log(fetchData)
  setInfo(fetchData.data)
}

useEffect(() => {
  loadData();


}, [])

return !Info?<Loader/>:(

    
    <div className="about">


        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1200"
        >

          <Pagetitle data={props} />
        </div>
        <div data-aos="fade-up" data-aos-duration="1200">
      <div className="color-block d-none d-lg-block"></div>
    <section className="main-content ">
      <div className="container">
        <div className="row">
          {/* Personal Info Starts */}

          <div className="col-xl-6 col-lg-5 col-12">
            <div className="row">
              <div className="col-12">
                <h3 className="text-uppercase custom-title mb-0 ft-wt-600">
                  personal infos
                </h3>
              </div>
              {/* End .col */}

              <div className="col-12 d-block d-sm-none">
                <img
                  src="img/hero/img-mobile.jpg"
                  className="img-fluid main-img-mobile"
                  alt="about avatar"
                />
              </div>
              {/* image for mobile menu */}

              <div className="col-12">
                <PersonalInfo info={Info}/>
              </div>
              {/* End personal info */}

              <div className="col-12 mt-1">
                <a className="button" href={process.env.REACT_APP_IMAGE_URL+Info.cv} download='ashokmehta resume'>
                  <span className="button-text">Download CV</span>
                  <span className="button-icon fa fa-download"></span>
                </a>
              </div>
              {/* End download button */}
            </div>
          </div>
          {/*  Personal Info Ends */}

          {/*  Boxes Starts */}
          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <Achievements info={Info}/>
          </div>
          {/* Achievements Ends */}
        </div>
        {/* End .row */}

        <hr className="separator" />

        {/* Skills Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-left text-sm-center custom-title ft-wt-600">
              My Skills
            </h3>
          </div>
          <Skills />
        </div>
        {/* Skills Ends */}

        <hr className="separator mt-1" />

        {/* Experience & Education Starts */}
        <div className="row">
          <div className="col-12">
            <h3 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Experience <span>&</span> Education
            </h3>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Experience info={Info}/>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
        {/*  Experience & Education Ends */}
      </div>
    </section>
    </div>
    </div>
  );
};

export default Index;
