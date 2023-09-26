import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useCookies} from 'react-cookie'


import Navbar from './Navbar'
import axios from 'axios'


const ForgetPassword = () => {

    const [email , setEmail] = useState("")
    const navigate = useNavigate()

    // const [cookie , setCookie] = useCookies(["userID_cookie"])
    // const [cookie2 , setCookie2] = useCookies(["user_token"])
    const [tokenCookie , setTokenCookie] = useCookies(["token_cookie"])



    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:3001/user/forget-password" , {
                email
            })

            window.alert("reset password link has been sent to your email")
            setTokenCookie("token_cookie" , response.data.userID)
           
        
            navigate('/reset-password')

        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div className='f-password'>

        <Navbar/>

        <h2>Forget your password</h2>

        <form onSubmit={onSubmit}>
            <label className='form-label' htmlFor="email">Account-Email</label>
            <input className='form-control' type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Account Email' />

            <button className='p-2 btn-primary ' type='submit'>submit</button>

        </form>

    </div>
  )
}

export default ForgetPassword