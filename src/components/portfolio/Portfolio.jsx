import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import Pagetitle from "../Pagetitle";
const Portfolio = (props) => {
  let imgUrl = process.env.REACT_APP_IMAGE_URL
  const [isOpen, setIsOpen] = useState(false);
  const [portfolio, setportfolio] = useState([])
  const [singleId, setsingleId] = useState()






  const toggleModal=async(e)=> {
     setsingleId(e.target.getAttribute('data-id'))
     setIsOpen(!isOpen);

  }



  const loadData = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/portfolio`;
    let fetchurl = await fetch(url);
    let fetchData = await fetchurl.json();
    setportfolio(fetchData.data)
  }

  useEffect(() => {
    loadData()

  }, [])


  return (
    <div className="portfolio">
      <div
        className="title-section text-left text-sm-center"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <Pagetitle data={props} />
        <Tabs>
          <TabList className="portfolio-tab-list">
            <Tab style={{ listStyle: 'none' }}>ALL</Tab>
          </TabList>


          <div className="portfolio-tab-content">
            <TabPanel>

              <ul className="row grid justify-content-center">
                {portfolio && portfolio.map((item) => {

                  return <li
                    key={item.id}
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="0"
                    style={{ listStyle: 'none' }}>
                    <figure  >
                      <img onClick={toggleModal} src={`${imgUrl}${item.other}`} alt={`${item.name}`} data-id={`${item.id}`}/>
                      <div className=" hover-content-wrapper">
                        <span className="content-title">{item.name}</span>
                      </div>
                    </figure>

                 
                  </li>
                }
                )
                }
                {/* <!-- Portfolio Item Ends --> */}

                {/* <!-- Portfolio Item Ends --> */}
              </ul>
            </TabPanel>
            {/* End MOCKUP Project */}
          </div>
        </Tabs>
      </div>

   {/* Start ModalOneContent */}
   <Modal
                      isOpen={isOpen}
                      onRequestClose={toggleModal}
                      contentLabel="My dialog"
                      className={`custom-modal dark `}
                      overlayClassName="custom-overlay dark"
                      closeTimeoutMS={500}
                    >
                      <div>
                        <button className="close-modal" onClick={toggleModal} >
                          <img src="/img/cancel.svg" alt="close icon" />
                        </button>
                        {/* End close icon */}

                        <div className="box_inner portfolio">
                         {singleId  && <ModalOneContent singleId={singleId} />}
                        </div>
                      </div>
                    </Modal>
                    {/* End  ModalOneContent */}


    </div>


  );
};

export default Portfolio;
