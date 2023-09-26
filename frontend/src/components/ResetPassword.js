import React, { useState } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'




const ResetPassword = () => {

    const [passwordOne , setPasswordOne] = useState("")
    const [passwordTwo , setPasswordTwo] = useState("")
    // const [cookie , setCookie] = useCookies(["userID_cookie"])
    // const [cookie2 , setCookie2] = useCookies(["user_token"])
    const [tokenCookie , setTokenCookie] = useCookies(["token_cookie"])


    const navigate = useNavigate()



    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:3001/user/reset-password" , {
                passwordOne ,
                passwordTwo
            } , {headers : {token_value : tokenCookie.token_cookie}})

            window.alert("password has been changed successfully ")
            navigate('/login')


        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div style={{display : "flex" , alignItems : "center" , flexDirection : "column" , minHeight : "100vh"}}>
        <h3>reset your password</h3>

        <form onSubmit={onSubmit} style={{display : "flex" , alignItems : "center" , flexDirection : "column"}}>
            <label htmlFor="pass1">new password</label>
            <input type="password" id='pass1' value={passwordOne} onChange={(e) => setPasswordOne(e.target.value)} />

            <label htmlFor="pass2">confirm password</label>
            <input type="password" id='pass2' value={passwordTwo} onChange={(e) => setPasswordTwo(e.target.value)} />

            <button className='mt-2 btn-primary p-2 mt-2 fs-7' type='submit'>reset password</button>

        </form>
    </div>
  )
}

export default ResetPassword