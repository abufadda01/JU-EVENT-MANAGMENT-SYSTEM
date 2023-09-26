import React from "react";


 const features = [

   {
      id: "ser-31",
       icon: "fas fa-star",
       title:"JU Events",
       details: "The website provides a list of events which been organized by the University"
   
    },
    {
      id: "ser-2",
    icon: "fas fa-calendar-check",
    title:"booking Events ",
    details: "To reserve your spot for the event , log in then click on the book event button  "

 },{
   id: "ser-3",
    icon: "fas fa-calendar-alt",
    title:"Organizing events ",
    details: "to organizing events fill the form in the Organizer page"

 }
]


const Features = () =>{
       return <section className="features">
       
       
       <div  className=" features-container row">
       

          {features.map(items =>{
                return(
                 <div  data-aos="fade-left"  key={items.id} id={items.id} className="features1 col-lg-3 col-md-6 col-sm-12 mx-auto text-center"> 
                 <div   className="icon-container">
                     <i className={items.icon}></i>
                     </div>
                     <h5>{items.title}</h5>
                     <p>{items.details}</p>
                </div>
                
                )
          })}
                   
             
         
       
                    </div> 
                 
      
       
       
          
       </section>
}

export default Features;