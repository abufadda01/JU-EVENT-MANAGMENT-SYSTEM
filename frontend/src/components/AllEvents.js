import React, { useState , useEffect , useLayoutEffect } from "react";
import axios from "axios";
import Modal from "./ModalDetails";
import userIdHook from "../Hooks/userIdHook";
import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";

import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";







const AllEvents = () => {


  
    useLayoutEffect(() => {
      window.scrollTo(0, 10)
    });

    const [events , setEvents] = useState()
    const [isDisabled , setIsDisabled] = useState(false)
    const [text , setText] = useState("")
    const [savedEvents , setSavedEvents] = useState([])

    // const [count , setCount] = useState(1)

    const userID = userIdHook()
    const navigate = useNavigate()
    const [cookie , setCookie] = useCookies(["token"])
    const [eventCookie , setEventCookie] = useCookies(["evCookie"])


    const toastOptions = {
      position : "top-center",
      autoClose: 3500,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };



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




           
          
        const getUserSavedEvents = async () => {
          try {
           const response =  await axios.get(`http://localhost:3001/events/savedEvents/${userID}`)
           
        

           setSavedEvents(response.data.bookedEvents)
          } catch (error) {
            console.error(error.message)
          }
        }

        // const btn = document.querySelectorAll('#btn')
        // btn.forEach((b , i) => {
        //   if(b.hasAttribute("disabled")){
        //     b.setAttribute("disabled" , true)
        //   }
        // })

        // const getBookedButtons = async () => {
        //   savedEvents.forEach((saved) => {
        //     events
        //   })
        //   window.alert("onload event")
        // }


        // window.onload = getBookedButtons
        


        fetchEvents()

        if(cookie.token){
          getUserSavedEvents()
        }
    
      },[])




     

      const saveEvent = async (eventID , e) => {
        
        const btn = document.querySelectorAll('#btn')
        btn.forEach((b) => {
          if(b.textContent == "booked"){
            b.setAttribute("disabled" , true)
          }
        })

        if(!cookie.token){
          navigate('/login')
        }else{
          try {
            const response = await axios.put("http://localhost:3001/events" , {
              eventID,
              userID,
            }, {headers : {authorized : cookie.token}})
          

              if(response.data.status === false){
                toast.error(response.data.bookedError , toastOptions)

              }

              if(response.data.status === true){
                setSavedEvents(response.data.bookedEvents)
                setEventCookie("evCookie" , response.data.userEmail)
                toast.success("Event has been booked successfully " , toastOptions)
              }

              // window.alert("Event has been booked successfully")
          
          } catch (error) {
            const errorMsg = error.response.data.bookedError
            toast.error(errorMsg , toastOptions)
            // window.location.reload()
            // const errorDiv = document.getElementById("error")

            // errorDiv.style.color = "red"
            // errorDiv.style.fontSize = "15px"

            // errorDiv.textContent = errorMsg

            // setTimeout(() => {
            //   window.location.reload()
            // }, 2500)
          }
        }
      }
     



    const [selectedEvent , setSelectedEvent] = useState(null);

    const selectEventHandler = (event) => {
        setSelectedEvent(event);
      };

      const deselectEventHandler = () => {
        setSelectedEvent(null);
      };



      const isEventSaved = (eventID , txt) => {
        if(savedEvents && savedEvents.includes(eventID)){
          return true
        }

       

      } 


      

     
      
   

    return(
        <section className ="allevents-section ">
          

        <div className="row ">
             {events && events.map((event) =>(
                    <div className="card col-lg-3 col-md-6 col-sm-12 mx-auto text-center" key={event._id}>
                      {console.log(event._id)}
                    
                    <img src={event.event_img}   />
                 
                       <div className="card-body">

                       <h5 className="card-title">{event.event_name}</h5>
                       <p style={{color : "blue"}}>{event.event_date}</p>
                       <p><b style={{fontSize : "18px"}}>{event.event_loc}</b></p>

                       
                       <a href={`https://www.google.com/maps/search/?api=1&query=${event.latitude},${event.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer" >
                          view on location
                         </a>
                        
                
                       
                      <p><b>{event.event_time}</b></p>
                      



                        <button className="events-btn" onClick={() => selectEventHandler(event)}>Details </button>

                        
                              <button className="events-btn" id="btn"  onClick={(e) => saveEvent(event._id , e)}>
                                    {isEventSaved(event._id)  ? "booked" : " Book The Event"}
                              </button>

                              <div id="error">

                              </div>
 
                          
                        
                                {/*                        
                       <button className="events-btn" id="btn" disabled={true}  onClick={(e) => saveEvent(event._id)}>
                                    {isEventSaved(event._id)  ? "booked" : " Book The Event"}
                                </button>
                               */}

                        </div>

                       

                        {selectedEvent && (
                        <Modal
                            detail={selectedEvent.event_desc}
              
                            onConfirm={deselectEventHandler}
                         />
                     )}

                     </div>
             ))}
        </div>
        <ToastContainer/>

        </section> 
    )
}



export default AllEvents;