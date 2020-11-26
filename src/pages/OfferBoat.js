import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

class OfferBoat extends Component {
  constructor() {
    super();
    this.state = { listOffersBoat: [] };
  }
  getBoatOffers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/offers/boats`)
      .then((boatOffers) => {
        this.setState({
          listOffersBoat: boatOffers.data,
        });
      });
  };
  componentDidMount() {
    this.getBoatOffers();
  }
  render() {
    
    return (
      <div>
        <h1 class="title-offer"> List of Boats</h1>
        <div className="cardContainer">
          {this.state.listOffersBoat.map((offers) => {
            return (
              <div key={offers._id}>
                <ul className="cardsoffers">
                  <li className="cardsoffers-item">
                    <div className="cardoffer">
                      <img className="offer-image" src={offers.offerImage} alt="Foto" />
                      <div className="cardoffer-content">
                        <hr className="hr-bars"/>
                        <div className="cardoffer-title"><p><b>Destination:   </b> {offers.destiny}</p></div>
                        <hr className="hr-bars"/>
                        <p className="cardoffer-text">
                        Start date:  {offers.start}
                         </p>
                         <hr className="hr-bars"/>
                        <p className="cardoffer-text">
                        Start at:   {offers.boardingLocation}
                        </p>
                        <hr className="hr-bars"/>                    
                        <a href="#" className="cardsoffer-button button-block">
                        <Link to={`/boatsDetails/${offers._id}`}>Details</Link>
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

export default withAuth(OfferBoat);
