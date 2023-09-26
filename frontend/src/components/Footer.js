import React from "react";


  const Footer=()=>{
       return <footer>
           <div className="footer-container row">
        
             <div className="footer-logo col-lg-4 col-md-6 col-sm-12 mx-auto text-center">
                <img src="LogoNameJu.jpg" />
             </div>
             <div className="footer-socialIcons col-lg-4 col-md-6 col-sm-12 mx-auto text-center">
             <h5>JU Social Media</h5>
             <a href="https://www.facebook.com/ujnews/"><i className="fab fa-facebook-square"></i></a>
             <a href="https://www.instagram.com/the.university.of.jordan/"><i className="fab fa-instagram"></i></a>
             <a href="https://twitter.com/uj_news"> <i className="fab fa-twitter-square"></i></a>
                
             </div>
             <div className="footer-contactInfo col-lg-4 col-md-6 col-sm-12 mx-auto text-center">
             <h5>Contact Info</h5>
             <div className="info">
             <i className="fas fa-phone"></i>
             <p>962 6 5355000</p>
             </div>
             <div className="info">

             <i className="fas fa-envelope"></i>
             <p>admin@ju.edu.jo</p>
             </div>
             <div className="info">
             <i className="fas fa-map-marker-alt"></i>
             <p>Aljubeiha,Amman,Jordan</p>
             </div>
                 
             </div>

           </div>
       </footer>
  }

  export default Footer;