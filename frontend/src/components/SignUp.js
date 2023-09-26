import React from "react";
import { useState , useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

import {toast , ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./Navbar";

import { useNavigate } from "react-router-dom";




const SignUp = () => {

  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

    const navigate = useNavigate()

    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [password2 , setPassword2] = useState("")

    const toastOptions = {
      position : "top-center",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    const onSubmit = async (e) => {
      e.preventDefault()

      try {
        const respone = await axios.post("http://localhost:3001/user/register" , {
          username,
          email ,
          password,
          password2
        })

        toast.success("User registerd suucessfully" , toastOptions)

        setTimeout(() => {
          navigate("/login")
        } ,3500)
        

      } catch (error) {
        const registerError = error.response.data.msg
        toast.error(registerError , toastOptions)

        setTimeout(() => {
          window.location.reload()
        } , 3500)

        // const errorDiv = document.getElementById("error")
        // const inputsField = document.querySelectorAll('input')

        // errorDiv.style.color = "red"
        // errorDiv.style.fontSize = "20px"

        // errorDiv.textContent = registerError

        // setTimeout(() => {
        //   setTimeout(() => {
        //     inputsField.forEach((i) => {
        //       i.style.border = "3px solid red"
        //       i.value = ""

        //       setTimeout(() => {
        //         window.location.reload()
        //       } , 2000)
        //     })
        //   }, 1000)
        // } , 2500)

      
        
      }
    }

   


  return (
    <div>

      <Navbar />

    <section>

      <div class="custom d-flex flex-column min-vh-100 justify-content-center align-center">
      
        <div class="container mt-5">
      
            <div class="col-sm-8 col-md-10 mx-auto bg-white rounded shadow">
      
              <div class="row">
      
                <div class="col-md-12">
      
                  <div class="m-5 text-center">
                    <h1>Create a new account !</h1>
                  </div>

                  <form class="m-5" onSubmit={onSubmit} >

                    <div id="error">

                    </div>

                  <div class="mb-3">
                      <label class="form-label label" htmlFor="username">
                        Username
                      </label>
                      <input 
                      class="form-control custom-form" 
                      type="text" value={username} 
                      placeholder="Enter your username " 
                      id="username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                      />

                    </div>

                    <div class="mb-3">
                      <label class="form-label label" htmlFor="email">
                        Email
                      </label>
                      <input 
                      class="form-control custom-form" 
                      type="text" value={email} 
                      placeholder="Enter your JU or Personal mail " 
                      id="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      />

                    </div>
                    <div class="mb-3">
                      <label class="form-label label" htmlFor="password">
                        Password
                      </label>
                      <input
                        class="form-control custom-form"
                        type="password"
                        id="password"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div class="mb-3">
                      <label class="form-label label" htmlFor="c-password">
                        Confirm Password
                      </label>
                      <input
                        class="form-control custom-form"
                        type="password"
                        id="c-password"
                        placeholder="************"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                      />
                    </div>

                    <div class="row mb-3">
                      <div class="col-6">
                        <div class="form-check text-start">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="remember-me"
                          />
                          <label class="form-check-label label" for="remember-me">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="text-end link">
                            <Link to='/login' >already have an account ?</Link>
                        </div>
                      </div>
                    </div>

                    
                        <button class="p-2 btn-primary w-100 mt-2 fs-4" type="submit">submit</button>
            

                  </form>

                  <ToastContainer/>

                </div>

                {/* <div class="col-md-6">

                  <div>
                    <img src="image2.jpeg" alt="login" class="img-fluid p-5" style={{  height : "100%"}} />
                  </div>

                </div> */}

              </div>

            </div>

          

        </div>

      </div>

    </section>

    </div>
  );
};

export default SignUp;
