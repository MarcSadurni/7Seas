import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div> 
      <h1>Welcome to 7SEAS</h1>
      <section>
      <div>
      <Link to="/offers/boats"> foto ofertas barco</Link>
      </div>
      <div>
      <Link to="/offers/crew">foto ofertas tripulantes</Link>
      </div>
      </section>
      
    </div>
  )
}

export default Home;