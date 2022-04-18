import React,{useEffect,useState} from "react";

const ModalOneContent = (props) => {
  console.log(props)
const [portfolio, setportfolio] = useState()
let imgUrl = process.env.REACT_APP_IMAGE_URL


  const loadSigleData = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/portfolio/${props.singleId}`;
    let fetchurl = await fetch(url);
    let fetchData = await fetchurl.json();
  setportfolio(fetchData.data)
  }


useEffect(() => {
  loadSigleData();
  // return loadSigleData();
  
   // eslint-disable-next-line react-hooks/exhaustive-deps
}, [props.singleId])

return !portfolio?'Loading...':(

    <div className="slideshow">
      <figure>
        {/* Project Details Starts */}
        <figcaption>
          <h3>{portfolio.name}</h3>
          <div className="row open-sans-font">
            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-file-text-o pr-2"></i>
              <span className="project-label">Project </span>:{" "}
              <span className="ft-wt-600 uppercase">{portfolio.type===1?'Web App':'Mobile App'}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-user-o pr-2"></i>
              <span className="project-label">Client </span>:{" "}
              <span className="ft-wt-600 uppercase">{portfolio.client}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-code pr-2"></i>
              <span className="project-label">Language </span>:{" "}
              <span className="ft-wt-600 uppercase">{portfolio.program}</span>
            </div>
            {/* End .col */}

            <div className="col-12 col-sm-6 mb-2">
              <i className="fa fa-external-link pr-2"></i>
              <span className="project-label">Preview </span>:{" "}
              <span className="ft-wt-600 uppercase">
                <a
                  href={portfolio.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {portfolio.link}
                </a>
              </span>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </figcaption>
        {/* Project Details Ends */}

        {/*  Main Project Content Starts */}
        <div className="videocontainer">
          <img
            className="youtube-video"
            alt={portfolio.name}
            src={`${imgUrl}${portfolio.other}`}
style={{ width:'100%' }}   />
        </div>
        {/* Main Project Content Ends */}
      </figure>
    </div>
    //  End .slideshow
  );
};

export default ModalOneContent;
