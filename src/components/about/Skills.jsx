import React,{useState,useEffect} from "react";



const Skills = () => {
  
const [skillsContent, setskillsContent] = useState();


const loadData = async () => {
  let url = `${process.env.REACT_APP_BASE_URL}/skill`
  let fetchurl = await fetch(url);
  let fetchData = await fetchurl.json();
  console.log(fetchData)
  setskillsContent(fetchData.data)
}

useEffect(() => {
  loadData();


}, [])


  return !skillsContent?'Loading...':(
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 p${val.percent}`}>
            <span>{val.percent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skill}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
