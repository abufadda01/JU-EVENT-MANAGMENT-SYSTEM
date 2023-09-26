import React from "react";
import Navbar from "./Navbar";
import BackgroundPages from "./BackgroundPages";


import AllEvents from "./AllEvents";
import Footer from "./Footer";




const EventsPage=()=>{
       return(
         <>
        <Navbar />
        <BackgroundPages title="JU Events" />
        <AllEvents/>
        <Footer/>
         </>
       )
}

export default EventsPage;