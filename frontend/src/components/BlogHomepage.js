
import {Link , useNavigate} from "react-router-dom";




import React from "react";
const BlogHomePage = ()=>{

    const navigate = useNavigate();


         const navigateHandler=()=>{
                navigate("/blog");
         }
        return <section className="blog-section">
        <div className="blog-container row">
            <div  data-aos="fade-right" className="blog-about col-lg-6 col-md-12 col-sm-12 ">
                 <h3> About Public Relations Unit</h3>
                 <p>The Media, Public Relations and Radio Unit works to achieve the aims and objectives of the University in relation to the relevant tasks and responsibilities by organizing all cognitive, cultural and community events at the University and the accompanying media coverage, highlighting and promoting them in the various audiovisual and reading media, monitoring and documenting them with news and image and providing the outside media with such news and dissemination.</p>
                
               <button onClick={navigateHandler}>See More</button> 
            </div>
            <div data-aos="fade-left" className="blog-image col-lg-6 col-md-12 col-sm-12  ">
            <img src="image-1.jpg"  />
           
            </div>
        </div>
             
        </section>
}

export default BlogHomePage;