import userEvent from '@testing-library/user-event';
import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.scss"


function Nav(props) {

  const {user} = props

  return (


    <nav>
      <ul className="navItems">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/">Login</Link></li>
        {user && <p>{user.displayName}</p>}
      </ul>
    </nav>

  )
}

export default Nav
