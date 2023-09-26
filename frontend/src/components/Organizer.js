import React, { useState , useLayoutEffect } from "react";
import Navbar from "./Navbar";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



const Organizer = () => {

  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const navigate = useNavigate()

  const [organizer , setOrganizer] = useState({
    org_email : "" ,
    org_phone_num : null ,
    event_name : "" ,
    event_loc  : "" ,
    event_time : "" ,
    event_date : "",
    event_desc : ""
  })
  
  

  const handleChange = (e) => {
    const {name , value} = e.target
    setOrganizer({...organizer , [name] : value})
  }


  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:3001/organizer" , organizer)
      window.alert("form submited successfully")
      navigate("/events")

    } catch (error) {
      console.error(error)
    }
  }
  

  return (
    <div>

    <Navbar/>

      <div className="form-area">

        <div className="container">

          <div className="row single-form g-0">

            <div className="col-sm-12 col-lg-6">

              <div className="left">
                <h2>
                  <span>Become an</span> <br /> Event Organizer
                </h2>
              </div>

            </div>

            <div className="col-sm-12 col-lg-6">

              <div className="right">

                <form onSubmit={onSubmit}>

                  <div className="mb-3">

                    <label for="exampleInputEmail1" className="form-label fs-5">
                      College or user email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      name="org_email"
                      placeholder="name@example.com"
                      onChange={handleChange}
                    />

                  </div>

                  <div className="mb-3">

                    <label for="exampleInputPassword1" className="form-label fs-5">
                      Organizer phone number
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="org_phone_num"
                      placeholder="+962"
                      onChange={handleChange}
                    />

                  </div>

                  <div className="mb-3">

                    <label for="exampleInputPassword1" className="form-label fs-5">
                      Event name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      name="event_name"
                      placeholder="enter event name"
                      onChange={handleChange}
                    />

                  </div>

                  <div className="mb-3">

                    <label for="exampleInputPassword1" className="form-label fs-5">
                      Event location
                    </label>

                    <select name="event_loc" id="event_loc" className="form-control" onChange={handleChange}>

                      <option value="" selected disabled>select event location</option>
                      <option value="main stadium">main stadium</option>
                      <option value="plaza square">Hassan runway</option>
                      <option value="tower square">tower square</option>
                      <option value="Deanship of students affairs">Deanship of students affairs</option>
                      <option value="Scientific halls">Scientific halls</option>

                    </select>

                  </div>
                   

                  <div className="mb-3">

                    <label for="exampleInputPassword1" className="form-label fs-5">
                      Event Time
                    </label>

                    <select name="event_time" id="event_loc" className="form-control" onChange={handleChange}>
                      <option value="" selected disabled>select event time</option>
                      <option value="10:00 - 11:30 am">10:00 - 11:30 am</option>
                      <option value="12:30 - 1:30 pm">12:30 - 1:30 pm</option>
                      <option value="2:00 - 4:00 pm">2:00 - 4:00 pm</option>
                      <option value="1:30 - 3:00 pm">1:30 - 3:00 pm</option>
                    </select>

                  </div>



                  <div className="mb-3">

                    <label for="exampleInputPassword1" className="form-label fs-5">
                        Event Date
                    </label>

                    <select name="event_date" id="event_date" className="form-control" onChange={handleChange}>
                        <option value="" selected disabled>select event date</option>
                        <option value="30-7-2023">30-7-2023</option>
                        <option value="22-6-2023">22-6-2023</option>
                        <option value="5-10-2023">5-10-2023</option>
                        <option value="7-11-2023">7-11-2023</option>
                    </select>

                  </div>

                  <div className="mb-3">

                    <label for="exampleInputPassword1" className="form-label fs-5">
                      Event Description
                    </label>

                    <textarea
                      className="form-control"
                      id="exampleInputPassword1"
                      name="event_desc"
                      placeholder="event description"
                      onChange={handleChange}
                    ></textarea>

                  </div>

                  <button type="submit" className="btn-primary">
                    Submit
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Organizer;
