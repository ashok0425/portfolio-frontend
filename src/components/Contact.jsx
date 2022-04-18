import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Pagetitle from "./Pagetitle";
import Address from "./Address";
import { toast } from 'react-toastify';

const Contact = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [obj, setobj] = useState({ name: '', email: '', phone: '', subject: '', message: '' })


  let changeValue = (e) => {
    setobj({ ...obj, [e.target.name]: e.target.value })
  }


  const onSubmit = async (e) => {
   let url = process.env.REACT_APP_BASE_URL + '/contact';
    let option = {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    }
    let fetchData = await fetch(url, option);
    let jsonData=await fetchData.json();

    if(jsonData.status==="Success"){
      toast(`${jsonData.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        type: 'success'
      });
    }else{
      toast(`${jsonData.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        type:'error'
      });
    }
   

    setobj({ name: '', email: '', phone: '', subject: '', message: '' })
  };

  return (
    <>
      <div
        className="contact">

        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1200"
        >

          <Pagetitle data={props} />
        </div>

        <div
          className="container"
          data-aos="fade-up"
          data-aos-duration="1200"
        >

          <div className="row">
            {/*  Left Side Starts */}
            <div className="col-12 col-lg-4 ">
              <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                Don't be shy !
              </h3>
              <p className="open-sans-font mb-4 ">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to
                be part of your visions.
              </p>

              <Address />
            </div>
            <div className="col-12 col-lg-8">

              <form className="contactform" onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        name="name"
                        placeholder="YOUR NAME"
                        value={obj.name}
                        onChange={changeValue}
                      />
                      {errors.name &&  (
                        <span className="invalid-feedback">Name is required</span>
                      )}

                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        {...register(
                          "email",
                          {
                            required: "Email is Required",
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: "Entered value does not match email format",
                            },
                          },
                          { required: true }
                        )}
                        type="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        value={obj.email}
                        onChange={changeValue}

                      />
                      {errors.email && (
                        <span className="invalid-feedback">{errors.email.message}</span>
                      )}
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        {...register("phone", { required: true })}
                        type="text"
                        name="phone"
                        placeholder="YOUR NUMBER"
                        value={obj.phone}
                        onChange={changeValue}

                      />
                      {errors.phone && (
                        <span className="invalid-feedback">phone number is required.</span>
                      )}
                    </div>
                  </div>


                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <input
                        {...register("subject", { required: true })}
                        type="text"
                        name="subject"
                        placeholder="YOUR SUBJECT"
                        value={obj.subject}
                        onChange={changeValue}

                      />
                      {errors.subject && (
                        <span className="invalid-feedback">Message is required.</span>
                      )}
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        {...register("message", { required: true })}
                        name="message"
                        placeholder="YOUR MESSAGE"
                        value={obj.message}
                        onChange={changeValue}

                      ></textarea>
                      {errors.message && (
                        <span className="invalid-feedback">Message is required.</span>
                      )}
                    </div>
                  </div>
                  {/* End .col */}

                  <div className="col-12">
                    <button type="submit" className="button">
                      <span className="button-text">Send Message</span>
                      <span className="button-icon fa fa-send"></span>
                    </button>
                  </div>
                  {/* End .col */}
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>

      {/* End contact */}
    </>
  );
};

export default Contact;
