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
    <Link to="/crewPage" style={{ textDecoration: 'none', color: 'white' }}>
    <div className="card_image">
      <img src="https://wallpapercave.com/wp/wp7929143.jpg"alt=""></img>
        </div>
    <div className="card_title title-white">
      <p>Find a Boat</p>
    </div>
    </Link>
  </div>
  
    <div className="card 2">
    <Link to="/boatsPage" style={{ textDecoration: 'none', color: 'white' }}>
    <div className="card_image">
    <img src="https://images8.alphacoders.com/636/thumb-1920-636768.jpg" alt=""></img>
      </div>
    <div className="card_title title-white">
      <p>Find a Crew</p>
    </div>
    </Link>
  </div>
  
  
  </div>
    </div>
  )
}


export default withAuth(Home);