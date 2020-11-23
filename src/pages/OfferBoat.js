import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class OfferBoat extends Component {
    constructor() {
        super();
        this.state = {listOffersBoat: [] };
    }
    getBoatOffers =() => {
        axios.get(`${process.env.REACT_APP_API_URI}/offers/boats`).then(boatOffers => {
            this.setState({
                listOffersBoat: boatOffers.data
            })
        })
    }
    componentDidMount(){
        this.getBoatOffers();
    }
    render() {
        return (
          <div>
            <div>
              {this.state.listOffersBoat.map(offers => {
                console.log(offers, "esto son las ofertas")
                return (
                  <div key={offers._id}>
                    <img src="" alt="Foto"/>
                    <p>{offers.destiny}</p>
                    <p>{offers.start}</p>
                    <h5>{offers.boardingLocation}</h5>
                    <Link to={`/offers/user/boats/${offers._id}`}>Details</Link>
                  </div>
                  
                );
              })}
            </div>
            
          </div>
        );
      }
}

export default withAuth(OfferBoat);

