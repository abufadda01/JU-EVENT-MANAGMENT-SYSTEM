import React from 'react'
import { useState } from 'react'
import '../admin.css'

function Admin() {

    // const [email , setEmail] = useState("")
    // const [password , setPassword] = useState("")

    const [adminInfo , setAdminInfo] = useState({
        email : "" ,
        password : ""
    })

    const handleChange = (e) => {
        setAdminInfo({...adminInfo , [e.target.name] : e.target.value})
        console.log(adminInfo)
    }


    const handleAdmin = (e) => {
        e.preventDefault()
        if(adminInfo.email === "admin@ju.edu.jo" && adminInfo.password === "admin123"){
            window.location.assign("http://localhost:3001/admin")
        }else{
            window.alert("Invaild admin info")
            setTimeout(() => {
                window.location.reload()
            } , 1500)
        }
    }

  return (
    <div className="wrapper-admin">
    <header> Admin  Login</header>
    <form onSubmit={handleAdmin}>
      <div className="admin-field email">
        <div className="input-area">
          <input name='email' value={adminInfo.email} onChange={handleChange} className='admin' type="text" placeholder="Email Address" />
          <i className="icon fas fa-envelope"></i>
          
        </div>
      </div>
      <div className="admin-field password">
        <div className="input-area">
          <input className='admin' name='password' value={adminInfo.password} onChange={handleChange} type="password" placeholder="Password" />
          <i className="icon fas fa-lock"></i>
        </div>
      </div>
      <div className="pass-txt"><a href="#">Forgot password?</a></div>
      <button type='submit' className='admin-btn'>log in</button>
    </form>
  </div>
  )
}

export default Admin