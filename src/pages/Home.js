import React from 'react'
import { withAuth } from "../lib/AuthProvider";
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="home"> 
      <h1>Welcome to 7SEAS</h1>
      <section className="section-home">
        <div>
          <Link to={`/profile/${props.user._id}`}>Ir a profile</Link>
        </div>
      <div>
      <Link to="/offers/boats"> <img className="foto-home"src="https://res.cloudinary.com/dh2lo8p1f/image/upload/v1605811781/fotos/foto_barco_q0adis.jpg"></img></Link>
   
      </div>
      <div>
      <Link to="/offers/crew"><img className="foto-home"src="https://res.cloudinary.com/dh2lo8p1f/image/upload/v1605812445/fotos/popeyehd_bft1ej.jpg"></img></Link>
   
      </div>
      </section>
      
    </div>
  )
}


export default withAuth(Home);