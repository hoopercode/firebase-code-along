import React from 'react'
import "./Routes.scss"
import {
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import Login from '../Login/Login'
import Home from '../Home/Home'
import Todo from '../Todo/Todo'

function Routes(props) {

  const {handleLogin, user, handleLogout} = props
  const  privateRoute = user ? "" : <Redirect to="/"/>


  return (
      <Switch>
        <Route path = "/">
          <Todo />
        </Route>
        <Route path = "/home">
          {privateRoute}
          <Home user = {user}/>
        </Route>
        <Route path = "/">
          <Login handleLogin={handleLogin} handleLogout={handleLogout}/>
        </Route>
      </Switch>

   
  )
}

export default Routes
