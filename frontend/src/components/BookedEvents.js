import * as React from 'react'
import { useState , useEffect , useLayoutEffect } from 'react'
import axios from 'axios'
import userIdHook from "../Hooks/userIdHook";
import {useTable} from 'react-table'
import Navbar from './Navbar';

import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";


const BookedEvents = () => {

  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const userID = userIdHook()
  const [bookedEvents , setBookedEvents] = useState([])

  const toastOptions = {
    position : "top-right",
    autoClose: 3500,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {

    const getBookedEventsArray = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/events/savedEvents/${userID}`)
        setBookedEvents(response.data.bookedEventsArray)
      } catch (error) {
        console.log(error)
      }
    }


    getBookedEventsArray()

  }, [])





const removeBookedEvent = async (eventID) => {
  
  try {
    const response = await axios.delete(`http://localhost:3001/user/remove/bookedEvent/${userID}/${eventID}`)

    if(response.data.status === true) {
      toast.success("booked event has been removed successfully" , toastOptions)
      setBookedEvents(response.data.bookedEvents)

      setTimeout(() => {
        window.location.reload()
      } , 2000)
    }
    console.log(eventID)
  } catch (error) {
    console.log(error)    
  }
 
}
  



  return (
    
    <div>

      <Navbar />

          <h2 className='booked-event-header'>Booked Events</h2>

        <div className='container-bookedEvents'>


          <table>

              <thead>

                <tr>
                  <th>id</th>
                  <th>EVENT_NAME</th>
                  <th>EVENT_LOCATION</th>
                  <th>EVENT_DATE</th>
                  <th>BOOKED_SEATS</th>
                  <th></th>
                </tr>

              </thead>

              <tbody>
                {bookedEvents && bookedEvents.map((booked , i) => {
                  return(
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{booked.event_name}</td>
                      <td>{booked.event_loc}</td>
                      <td>{booked.event_date}</td>
                      <td>{booked.limit}</td>
                      <td>
                        <button className='btn-booked-event' onClick={() => removeBookedEvent(booked._id)}>Unbook Event</button>
                      </td>
                    </tr>
                  )})}
              </tbody>

          </table>

          <ToastContainer/>

        </div>

    </div>
  )

}

export default BookedEvents