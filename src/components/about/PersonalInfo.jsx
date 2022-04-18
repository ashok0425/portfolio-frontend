import React from "react";


const PersonalInfo = (props) => {

  
const personalInfoContent = [
  { meta: "Full name", metaInfo: props.info.name },
  { meta: "Age", metaInfo: props.info.age },
  { meta: "Nationality", metaInfo: props.info.nationality },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: props.info.address },
  { meta: "phone", metaInfo: props.info.phone },
  { meta: "Email", metaInfo: props.info.email },
  { meta: "Skype", metaInfo: props.info.skype },
  { meta: "Whatsapp", metaInfo: '9813519397' },
  { meta: "langages", metaInfo: "Nepal, English, Hindi, Bhojpuri" },
];

  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
