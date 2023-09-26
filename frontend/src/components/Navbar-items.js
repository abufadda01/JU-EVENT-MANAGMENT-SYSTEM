import {Link , useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie'


import userIdHook from "../Hooks/userIdHook";


const NavbarItems= () =>{

  // const userID = userIdHook()
  const [cookie , setCookie] = useCookies(["token"])
  const [eventCookie , setEventCookie] = useCookies(["evCookie"])

  // const [cookie2 , setCookie2] = useCookies(["userID_cookie"])
  // const [cookie3 , setCookie3] = useCookies(["user_token"])
  const navigate = useNavigate()


  const logout = () => {
      window.localStorage.removeItem("userID")

      setCookie("token" , '')
      setEventCookie("evCookie" , '')
     

      navigate('/')
  }

      return(
        <div className="collapse navbar-collapse" id="navbarNav">
          
          <ul className="navbar-nav ms-auto">
       
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
        
            <li className="nav-item">
              <Link className="nav-link" to="/blog">About</Link>
            </li>

         
          
            {/* {userID  ? 
            (<li className="nav-item">
              <Link className="nav-link" to="/login">log in</Link>
            </li>) 
            : (
            <li className="nav-item">
              <Link className="nav-link" to="/register">Sign up</Link>
            </li>
            )
            } */}



            <li className="nav-item">
              <Link to ="/events" className="nav-link" > JU Events</Link>
            </li>


            {
              cookie.token  ?
                <>

                    <li className="nav-item">
                      <Link to ="/organizer" className="nav-link" > Organizer</Link>
                    </li>
                           <li className="nav-item">
                              <Link  to ="/bookedEvents" className="nav-link" >Booked-Events</Link>
                           </li>

                    {/* {
                      eventCookie.evCookie ? 
                           :
                           <>
                           
                           </>
                    } */}
                    
                    <button className="log-out-btn" onClick={logout}>Log out</button>

                </>
                :
                <>

                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log in</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">Sign up</Link>
                </li> 

                </>
            }


            
            
      </ul>

    </div>
  )
}

export default NavbarItems;