import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";


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
        this.props.history.push("/boatsPage");
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
        <div className="offerCrewPhoto">
          <img
            className="carddetail-image"
            src={this.state.offerImage}
            alt="Offer Image"
          ></img>
          </div>

          <p><b>Crew number: </b>{this.state.crewNumber}</p>
          <hr className="hr-bars" />
          <p><b>Cost: </b>{this.state.costs} </p>
          <hr className="hr-bars" />
          <p><b>Destiny: </b>{this.state.destiny} </p>
          <hr className="hr-bars" />
          <p><b>Experience: </b>{this.state.experience} </p>
          <hr className="hr-bars" />
          <p><b>BoardingLocation:   </b>{this.state.boardingLocation}</p>
          <hr className="hr-bars" />
          <p><b>Start date: </b>{this.state.start}</p>
          <hr className="hr-bars" />
          <p><b>Estimated Time: </b>{this.state.estimatedTime}</p>
          <hr className="hr-bars" />
          <p><b>Nationality: </b>{this.state.nationality}</p>
          <hr className="hr-bars" />
          <p><b>Crew age range: </b>{this.state.ageCrew}</p>
          <hr className="hr-bars" />
          <p><b>Journey: </b>{this.state.journey}</p>
          <hr className="hr-bars" />
          <p><b>Sea Miles: </b>{this.state.seaMiles}</p>
          <hr className="hr-bars" />
          <p><b>Offer Description: </b>{this.state.description}</p>
          <hr className="hr-bars" />
          <p><b>Contact info: </b>{this.state.contactEmail}</p>
          <hr className="hr-bars" />
        </div>
        <div className="details-buttons">
        <button className="login-button">
          <Link to="/boatsPage">Go back</Link>
        </button>
        {this.props.user._id === this.state.offerCreator ? (
          <>
            <button className="login-button" onClick={() => this.DeleteOffer()}>
              Delete Offer
            </button>
            <Link to={`/editingOffer/${this.props.match.params.id}`}>
              <button className="login-button">Edit your Offer</button>
            </Link>
          </>
        ) : null}
      </div>
      </div>
    );
  }
}

export default withAuth(OfferBoatDetail);
