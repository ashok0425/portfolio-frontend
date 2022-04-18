import React from "react";

const Achievements = (props) => {
  
const achievementsContent = [
  { title: `${props.info.experience}`, subTitle1: "years of", subTitle2: "experience" },
  { title: props.info.project , subTitle1: "completed", subTitle2: "projects" },
  { title: props.info.customer, subTitle1: "Happy", subTitle2: "customers" },
  // { title: "98%", subTitle1: "awards", subTitle2: "won" },
];

  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className={ i===2?'col-6 offset-3':'col-6 '} key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
