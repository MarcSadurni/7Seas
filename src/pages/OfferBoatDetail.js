import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";
import EditOffer from './EditOffer';

class OfferBoatDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSingleOffer = () => {
    const { params } = this.props.match;
    axios
      .get(`${process.env.REACT_APP_API_URI}/offers/boats/${params.id}`)
      .then((boatDetails) => {
        const theBoatDetails = boatDetails.data;
        this.setState(theBoatDetails);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  DeleteOffer = () => {
    const { params } = this.props.match;
    axios
      .delete(`${process.env.REACT_APP_API_URI}/profile/delete/${params.id}`)
      .then(() => {
        this.props.history.push("/profile/:id");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleOffer();
  }

  render() {
   
    return (
      <div className="offerDetail">
        <h1>Offer Detail</h1>
        <div className="offerDetail-info">       
          <img className="cardoffer-image" src={this.state.offerImage} alt="Offer Image"></img>
          <hr className="hr-bars"/>
        <p>Crew number: {this.state.crewNumber}</p>
        <hr className="hr-bars"/>
        <p>Cost: {this.state.costs} </p>
        <hr className="hr-bars"/>
        <p>Destiny: {this.state.destiny} </p>
        <hr className="hr-bars"/>
        <p>Experience: {this.state.experience} </p>
        <hr className="hr-bars"/>
        <p>BoardingLocation:{this.state.boardingLocation}</p>
        <hr className="hr-bars"/>
        <p>Start date: {this.state.start}</p>
        <hr className="hr-bars"/>
        <p>Estimated Time: {this.state.estimatedTime}</p>
        <hr className="hr-bars"/>
        <p>Nationality: {this.state.nationality}</p>
        <hr className="hr-bars"/>
        <p>Crew age range: {this.state.ageCrew}</p>
        <hr className="hr-bars"/>
        <p>Journey: {this.state.journey}</p>
        <hr className="hr-bars"/>
        <p>Sea Miles: {this.state.seaMiles}</p>
        <hr className="hr-bars"/>
        <p>Offer Description: {this.state.description}</p>
        <hr className="hr-bars"/>
        <p>Contact info: {this.state.contactEmail}</p>
        <hr className="hr-bars"/>
     
        </div>
        <button className="login-button"><Link to="/boatsPage">Go back</Link></button>
        {!this.state.user
          ? null : (
              <button onClick={() => this.DeleteOffer()}>Delete Offer</button>
            ) && (
            <Link to={`/offers/user/editOffer/${this.props.match.params.id}`}>Edit your Offer</Link>  
            )
        }
      </div>
    );
  }
}

export default withAuth(OfferBoatDetail);
