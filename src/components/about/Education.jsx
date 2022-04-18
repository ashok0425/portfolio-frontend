import React from "react";

const educationContent = [
  {
    year: "2018",
    degree: "FULL STACK DEVELOPER CERTIFICATION",
    institute: "ONLINE ",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
    //     adipisicing elit`,
  },
  {
    year: "2018",
    degree: "BRITISH COMPUTER SOCIETY",
    institute: "MIDDLESEX UNIVERSITY",
    // details: `  Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore
    //     adipisicing elit`,
  },
  {
    year: "2017",
    degree: "SECONDARY LEVEL DEGREE",
    institute: "KANTIPUR INT'L COLLEGE",
    // details: `Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol
        // elit, tempor incididunt`,
  },
  {
    year: "2015",
    degree: "PRIMARY EDUCATION ",
    institute: "MULTIPLE CREATIVE ACADEMY",
    // details: `Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur
        // elit, sed do eiusmod tempor duntt`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          {/* <p className="open-sans-font">{val.details}/</p> */}
        </li>
      ))}
    </ul>
  );
};

export default Education;
