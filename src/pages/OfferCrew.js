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
                    <img className="offer-image" src={crew.image} alt="Foto"/>
                    <hr className="hr-bars"/>
                      <div className="cardoffer-content">
                        <div className="cardoffer-title"><p>User name: {crew.username}</p></div>
                        <hr className="hr-bars"/>
                        <p className="cardoffer-text">
                        <b>Country:</b> {crew.country}</p>
                        <hr className="hr-bars"/>
                        <p className="cardoffer-text">
                        Disponibility: {crew.disponibility}
                        </p>
                        <hr className="hr-bars"/>
                      
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