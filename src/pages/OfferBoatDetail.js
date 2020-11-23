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
    console.log(params, "kkkkkkkkkkkkkkkkkkkkk");
    axios
      .get(`${process.env.REACT_APP_API_URI}/offers/boats/${params.id}`)
      .then((boatDetails) => {
        const theBoatDetails = boatDetails.data;
        console.log(boatDetails, "wwwwwwwwwwwwwww");
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
      <div>
        <h1>hello</h1>
        <p>Cost: {this.state.costs} </p>
        <p>Destiny: {this.state.destiny} </p>
        <p>Experience: {this.state.experience} </p>
        <Link to="/offers/boats">Go back</Link>
        {!this.state.user
          ? null : (
              <button onClick={() => this.DeleteOffer()}>Delete Offer</button>
            ) && (
            <Link to={`/offers/editOffer/${this.props.match.params.id}`}>Edit your Offer</Link>  
            )
        }
      </div>
    );
  }
}

export default withAuth(OfferBoatDetail);
