import Nav from "./Components/Nav/Nav";
import Routes from "./Containers/Routes/Routes";
import "./App.css"
import { useEffect, useState } from "react";
import {signInWithRedirect, onAuthStateChanged, signOut } from "firebase/auth";
import { provider, auth } from "./firebase"



import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {


const [user, setUser] = useState(null)
 const handleLogin = () => {
  signInWithRedirect(auth, provider);
 } 

 const handleLogout = () => {
  signOut(auth)
};

 useEffect(() => {
  onAuthStateChanged(auth, (authenticatedUser) => {
    if (auth) {
      setUser(authenticatedUser) 
    
    } else {
      setUser(null)
    }
     })
    


   return () => {
     
   }
 }, [])


  return (
    <Router>
      <Nav user={user}/>
      <Routes user = {user} handleLogin={handleLogin} handleLogout={handleLogout}/>
    </Router>
  );
}

export default App;
