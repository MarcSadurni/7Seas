import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class OfferCrew extends Component {
    constructor() {
        super();
        this.state = {listOffersCrew: [] };
    }
    
    getCrewOffers =() => {
       
        axios.get(`http://localhost:4000/offers/crew`).then(crewOffers => {
            console.log(crewOffers)
            this.setState({
                listOffersCrew: crewOffers.data
            })
        })
    }
    componentDidMount(){
        this.getCrewOffers();
    }
    render() {
        return (
          <div>
            <div>
              {this.state.listOffersCrew.map(crew => {
                console.log(crew, "esto son las ofertas")
                return (
                  <div key={crew._id}>
                    <img src="" alt="Foto"/>
                    <h5>{crew.username}</h5>
                    <p>{crew.country}</p>
                    <p>{crew.disponibility}</p>
                    
                    <Link to={`/offers/crew/${crew._id}`}>Details</Link>
                  </div>
                  
                );
              })}
            </div>
            
          </div>
        );
      }
}

export default withAuth(OfferCrew);