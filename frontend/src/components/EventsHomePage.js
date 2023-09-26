import React, { useState , useEffect } from "react";
import Modal from "./ModalDetails";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

// const upComingEvents = [
//   {
//     id: "e-1",
//     img: "image5.jpeg",
//     title: "Event Title",
//     date: "Event Date",
//     location: "Event Location",
//     detail: "Event 1"
  
//   },
//   {
//     id: "e-2",
//     img: "image5.jpeg",
//     title: "Event Title",
//     date: "Event Date",
//     location: "Event Location",
//     detail: "Event 2"
   
//   },
// ]


const EventsHomePage = () => {
  
  const [events , setEvents] = useState()

  useEffect(() => {
    const fetchEvents = async () =>{
      try {
        const res = await axios.get("http://localhost:3001/events")
        setEvents(res.data)
        console.log(res.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchEvents()

  },[])


  const navigate = useNavigate()

  const [selectedEvent, setSelectedEvent] = useState(null);

  const selectEventHandler = (event) => {
    setSelectedEvent(event);
  };

  const deselectEventHandler = () => {
    setSelectedEvent(null);
  };

  const getEventsPage = (e) => {
   navigate('/events')
  }


  return (
    
    <section className="eventsHP-section">
      
      <div className="row">
        {events && events.map((event , i) => 
        {return(
          <div
          key={event._id}
          id={event._id}
          className="card col-lg-6 col-md-6 col-sm-12 mx-auto text-center "
        >
          {selectedEvent && (
            <Modal
              detail={selectedEvent.event_desc}
            
              onConfirm={deselectEventHandler}
            />
          )}

          <img src={event.event_img} />

          <div className="card-body">

            <h5 className="card-title">{event.event_name}</h5>
            <p>{event.event_date}</p>

            <button
              className="events-btn"
              onClick={() => selectEventHandler(event)}
            >
              Details
            </button>

            <button className="events-btn" onClick={() => getEventsPage()}> Book The Event</button>

          </div>

        </div>

        )
        }).slice(0,2)}

      </div>

      <button className="seeAll-btn" onClick={getEventsPage}>View All Events</button>

    </section>
  );
};

export default EventsHomePage;




















