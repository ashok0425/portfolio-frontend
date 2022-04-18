import React from "react";

const experienceContent = [
  {
    year: "   2020 - present",
    position: " Full Stack Developer",
    compnayName: "Freelancing",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        // adipisicing elit`,
  },
  {
    year: "   2020 - 2022",
    position: " Full Stack Developer",
    compnayName: "FalcontechNepal",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
        // adipisicing elit`,
  },
  {
    year: "2019 - 2020",
    position: " Full Stack Developer",
    compnayName: "Infozey",
    // details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        // elit, tempor incididunt`,
  },
  {
    year: "2018 - 2019",
    position: "Frontend Developer",
    compnayName: "WebsoftItNepal",
    // details: `Started my journey as frontend developer in WebsoftItNepal from Nov 2017 and `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          {/* <p className="open-sans-font">{val.details}</p> */}
        </li>
      ))}
    </ul>
  );
};

export default Experience;
