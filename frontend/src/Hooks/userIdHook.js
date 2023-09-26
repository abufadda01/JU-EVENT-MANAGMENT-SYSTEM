import React from 'react'

const userIdHook = () => {
  return ( 
    window.localStorage.getItem("userID")
  )
}

export default userIdHook 