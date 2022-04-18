import React,{useState,useEffect} from "react";
import Loader from "../Loader"
import { useHistory } from "react-router-dom";


const Hero = () => {

  const history = useHistory();
  const [Info, setInfo] = useState()

const loadData = async () => {
  let url = `${process.env.REACT_APP_BASE_URL}/info`
  let fetchurl = await fetch(url);
  let fetchData = await fetchurl.json();
  setInfo(fetchData.data)
}

useEffect(() => {
  loadData();
}, [])

// loadData();


const heroContent =Info? {
  heroImage: Info.image,
  heroMobileImage: Info.mobile_image,
  heroTitleName: Info.name,
  heroDesignation: Info.designation,
  heroDescriptions: Info.about,
  heroBtn: "more about me",
}:'';



  return !Info?<Loader/>:(
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${
              process.env.REACT_APP_IMAGE_URL +Info.image
            })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={`${ process.env.REACT_APP_IMAGE_URL+heroContent.heroMobileImage}`}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="Ashok Mehta"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}.
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>

            <button className="button my-1" onClick={()=>history.push('/contact')}>
              <span className="button-text">Hire me</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
&nbsp;
&nbsp;
&nbsp;
            <a className="button my-1" href={process.env.REACT_APP_IMAGE_URL+Info.cv} download='Ashok Mehta resume'>
              <span className="button-text">Download CV</span>
              <span className="button-icon fa fa-download"></span>
            </a>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

    </>
  );
};

export default Hero;
