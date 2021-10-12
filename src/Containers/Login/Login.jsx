import React from 'react'
import "./Login.scss"


function Login(props) {
  const {handleLogin, handleLogout} = props
  
  return (
    <div className="login">
      <h1>Please Login to Continue</h1>
      <div className="buttons">
      <button onClick={handleLogin}>Sign In</button>
      <button onClick={handleLogout}>Sign Out</button>
      </div>
    </div>
  )
}

export default Login
