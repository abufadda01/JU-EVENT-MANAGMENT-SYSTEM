import React from "react";
import axios from "axios";
import { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";


const CarouselCaption = () => {

  const navigate = useNavigate()


  const [events , setEvents] = useState()
  const [searchedEvent , setSearchedEvent] = useState("")


  useEffect(() => {
    const getEventsForSearch = async () => {
      const res = await axios.get("http://localhost:3001/events")
      setEvents(res.data)
      console.log("events" , events)
    }

    getEventsForSearch()

  },[])


  const searchHandle = async (e) => {
    // const dropdown = document.querySelector('.dropdown')
    // key == "" ? dropdown.style.visibility = 'hidden' : dropdown.style.visibility = 'visibile'
    
    let key = e.target.value
    let event = await axios.get(`http://localhost:3001/events/${key}`)
    let data = event.data

    setSearchedEvent(key)

    console.log("search from backend" , data)

  }


  
  const onSearch = (searchItem) => {
    console.log("searchitem" , searchItem)
    setSearchedEvent(searchItem)

   if(searchedEvent){
    setTimeout(() => {
      navigate('/events')
    } , 2000)
   }
  }

  

      return (
       
      <div className="caption col-md-6">

        <div className="text">

        <img src="JuLogo.png" width="50px" height="60px" />

          <h3>Events Management System / JU </h3>
             
        </div>

        <div className="search-container">

        {/* <form className="search-from">
            <input type="search" value={searchedEvent}  placeholder="Search for events"  onClick={() => onSearch(searchedEvent)}  onChange={searchHandle} />
            {/* <button onClick={() => onSearch(searchedEvent)}>search</button> */}
        {/* </form> */} 

        <div className="dropdown">
          {events && events.filter((event) => {
            let searchedEventVar = searchedEvent.toLowerCase()
            let eventName = event.event_name.toLowerCase()

            return searchedEventVar && eventName.startsWith(searchedEventVar) && eventName !== searchedEventVar
          })
          .slice(0 , 3)
          .map((event) => {
            return(
              <div className="dropdown-row" key={event._id} onClick={() => onSearch(event.event_name)}>
                {event.event_name}
              </div>
            )
          })}
        </div>

        </div>
           
      </div>    

      )
}


export default CarouselCaption;

