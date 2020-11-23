import React from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="home"> 
      <div className="home-titles">
      <h1>Welcome to 7SEAS</h1>
      <h2>Your sailing adventures starts here!</h2>
      </div>
      <div className="cards-list">
  
  <div className="card 1">
    <div className="card_image">
    <Link to="/crewPage"><img src="http://www.fillmurray.com/300/300"alt=""></img></Link>
        </div>
    <div className="card_title title-white">
      <p>Find a Boat</p>
    </div>
  </div>
  
    <div className="card 2">
    <div className="card_image">
    <Link to="/boatsPage"><img src="http://www.fillmurray.com/g/300/300" alt=""></img></Link>
      </div>
    <div className="card_title title-white">
      <p>Find a Crew</p>
    </div>
  </div>
  
  
  </div>
    </div>
  )
}


export default withAuth(Home);