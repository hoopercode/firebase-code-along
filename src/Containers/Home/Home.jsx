import React from 'react'
import "./Home.scss"

function Home(props) {
const {user} = props
let homeJSX;

if (user) {
  const {
    displayName,
    email,
    photoURL,
    metadata: { lastSignInTime },
  } = user;

  homeJSX = (
    <div>
      <h2>{displayName}</h2>
      <p>{email}</p>
      <p>{lastSignInTime}</p>
      <img src={photoURL} alt={displayName} />
    </div>
  );

} else {
  homeJSX = <h2>No User</h2>;
}




  return homeJSX
}

export default Home
