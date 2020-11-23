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
       
        axios.get(`${process.env.REACT_APP_API_URI}/offers/crew`).then(crewOffers => {
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
            <div className="cardContainer">
              {this.state.listOffersCrew.map(crew => {
                console.log(crew, "esto son las ofertas")
                return (



                <div key={crew._id}>
                <ul className="cardsoffers">
                  <li className="cardsoffers-item">
                    <div className="cardoffer">
                      <div className="cardoffer-image cardoffer-image1"><img src={crew.image} alt="Foto"/></div>
                      <div className="cardoffer-content">
                        <div className="cardoffer-title"><p>User name: {crew.username}</p></div>
                        <p className="cardoffer-text">
                        Country: {crew.country}
                        </p>
                        <p className="cardoffer-text">
                        Disponibility: {crew.disponibility}
                        </p>
                      
                        <a href="#" className="cardsoffer-button button-block">
                        <Link to={`/crewDetails/${crew._id}`}>Details</Link>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>   
              </div>
            );
          })}
            </div>
            
          </div>
        );
      }
}

export default withAuth(OfferCrew);