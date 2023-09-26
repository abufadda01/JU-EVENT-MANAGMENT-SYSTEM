import {useCookies} from 'react-cookie'
import { useNavigate } from "react-router-dom";


const BlogAbout=()=>{
  
  const [cookie , setCookie] = useCookies(["token"])
  const navigate  = useNavigate()


  const getOrganizerPage = () => {
    if(cookie.token){
      navigate("/organizer")
    }else{
      navigate("/login")
    }
  }
    
           return <section className="aboutBlog-Section">
                <h2>About</h2>
                  <div className="row">
                <div  data-aos="fade-right" class="content ">
                    <p>The Media, Public Relations and Radio Unit works to achieve the aims and objectives of the University in relation to the relevant tasks and responsibilities by organizing all cognitive, cultural and community events at the University and the accompanying media coverage, highlighting and promoting them in the various audiovisual and reading media, monitoring and documenting them with news and image and providing the outside media with such news and dissemination.
                         </p>
                         <p>
                         The Unit works to create a media content that reflects the knowledge and cultural content of the University, as well as the complementarity of the introduction of content to the events and events of the University community and assurance of communication and communication with the community outside the University, through the diversity of news, topics, articles and events commensurate with the language of digital media and the needs of communication with the University's target groups.
                         </p>

                         <p>
                         The importance of the Unit's tasks is highlighted by its association with the status of a large institution such as the University of Jordan, a 60-year-old boat and because of its scientific, cultural and social weight, the University's internal audiences, consisting of its faculty and administrative staff and students, and its peripheral connectivity with the outside community, are considered to be a valid unit. and ensure that the University's culture, values and expertise are passed on to the surrounding community, It is also keen to inform the community of the University's academic and non-academic activities and organize various events that the University hosts from conferences, seminars and workshops and cover them professionally and ably.
                         </p>
                </div>

                <div className="about-btn d-flex justify-content-center">
                   
                    <button onClick={() => getOrganizerPage()}>Be An Organizer</button>
                </div>

                </div>
           </section>
               
                          
}

export default BlogAbout;