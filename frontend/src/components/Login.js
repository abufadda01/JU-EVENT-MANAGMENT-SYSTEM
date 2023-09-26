import React, { useState , useLayoutEffect } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
import {useCookies} from 'react-cookie'

import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
// import userIdHook from '../Hooks/userIdHook'


const LoginPage = ()=>{

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

    const toastOptions = {
        position : "top-center",
        autoClose: 6000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const [_ , setCookie] = useCookies(["token"])
    
    const navigate = useNavigate()
    // const userID = userIdHook()

 



    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const respone =  await axios.post("http://localhost:3001/user/login" , {
                email,
                password
            })

                setCookie("token" , respone.data.token)
                window.localStorage.setItem("userID" , respone.data.userID)
                
                toast.success("Welcome back" , toastOptions)

                setTimeout(() => {
                    navigate('/events')
                },2500)

            // if(respone.data.status === false){
            //     toast.error(respone.data.msg , toastOptions)
            // }

            // if(respone.data.status === true){
            //     setCookie("token" , respone.data.token)
            //     window.localStorage.setItem("userID" , respone.data.userID)
            //     toast.success(`Welcome back ${respone.data.user.username}` , toastOptions)
                
            //     setTimeout(() => {
            //         navigate('/events')
            //     },3500)
            // }



        } catch (error) {
           const errorMsg = error.response.data.msg
           toast.error(errorMsg , toastOptions)

           setTimeout(() => {
            window.location.reload()
           } , 3500)
            // errorDiv.style.color = "red"
            // errorDiv.style.fontWeight = "bold"
            // errorDiv.style.fontSize = "14px"
            // errorDiv.textContent = loginError

        }
    }


//   return (
//     <div>

//         <Navbar/>

// 	    <div className="login-container">

// 		<div  className="img">
// 			<img src="wave.jpg" />
// 		</div>

// 		<div className="login-content">

// 			<form  className='form-login' onSubmit={onSubmit}>

// 				<img src="avatar.svg" />

// 				<h2 className="title mb-2 mt-3">Welcome</h2>

//            		<div className="input-div one">

//            		   <div className="i">
//            		   		<i className="fas fa-user"></i>
//            		   </div>

//            		   <div className="div">
//            		   		<h5>Email</h5>
//            		   		<input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
//            		   </div>

//            		</div>

//            		<div className="input-div pass">

//            		   <div className="i"> 
//            		    	<i className="fas fa-lock"></i>
//            		   </div>

//            		   <div className="div">
//            		    	<h5>Password</h5>
//            		    	<input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
//             	   </div>

//             	</div>

//                 <Link className='a-login' to='/forget-password'>Forget your password ?</Link>

//                 <button className='btn' type='submit'>Log in</button>

//             </form>
//         </div>
//     </div>
//     </div>
//   )
// }

        return(
            <div>

                <Navbar/>

           <div className="login-page">
                  <div className="login-form-container">
                        <div className="login-form">
                              <div className="title">
                                 <h3>The University Of Jordan</h3>
                                 <img src = "JuLogo.png" alt="Ju logo" />
                              </div>
    
                        
                        <form onSubmit={onSubmit}>

                          <div id='error'>
                            
                          </div>       
                          
                          <div className="input">
                          <i class="fa-solid fa-envelope"></i>
                           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email"/>
                           </div>
                           
                           <div className="input">
                           <i class="fa-solid fa-lock"></i>
                           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                           </div>

                           <div className='dont-have-acc'>
                                <b style={{marginTop : "20px"}}>Don't have an account ? </b> <Link to="/register" style={{marginTop : "20px"}} >Sign up</Link>
                            </div>     

                        <button type="submit" >Login</button>
                       
                        </form>

                        <ToastContainer/>

                        </div>
                  </div>
           </div>
            </div>

        )
    }
        


// export default Login



export default LoginPage;


