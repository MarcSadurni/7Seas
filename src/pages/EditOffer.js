import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class EditOffer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crewNumber: this.props.crewNumber,
      boardingLocation: this.props.boardingLocation,
      destiny: this.props.destiny,
      costs: this.props.costs,
      start: this.props.start,
      estimatedTime: this.props.estimatedTime,
      description: this.props.description,
      nationality: this.props.nationality,
      ageCrew: this.props.ageCrew,
      journey: this.props.journey,
      experience: this.props.experience,
      seaMiles: this.props.seaMiles,
      offerImage: this.props.offerImage,
      offerCreator: this.props.offerCreator,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {
      crewNumber,
      boardingLocation,
      destiny,
      costs,
      start,
      description,
      estimatedTime,
      nationality,
      ageCrew,
      journey,
      experience,
      seaMiles,
      offerImage,
      offerCreator,
    } = this.state;

    axios
      .put(
        `${process.env.REACT_APP_API_URI}/offers/editOffer/${this.props.match.params.id}`,
        {
          crewNumber,
          boardingLocation,
          destiny,
          costs,
          start,
          estimatedTime,
          description,
          nationality,
          ageCrew,
          journey,
          experience,
          seaMiles,
          offerImage,
          offerCreator,
        }
      )
      .then(() => {
        this.props.history.push(`/boatsDetails/${this.props.match.params.id}`);
      })
      .catch((error) => console.log(error));
  };

  handleChangeOffer = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFileUpload = async (e) => {
    const upload = new FormData();
    upload.append("image", e.target.files[0]);
    try {
      const res = await service.handleUpload(upload);
      this.setState({ offerImage: res.secure_url });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="edit">
        <hr />
        <h3>Edit Offer</h3>
        <form
          className="edit-info"
          onSubmit={this.handleFormSubmit}
          encType="multipart/form-data"
        >
          <label>Crew number:</label>
          <input
            type="text"
            name="crewNumber"
            value={this.state.crewNumber}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>Boarding location: </label>
          <input
            type="text"
            name="boardingLocation"
            value={this.state.boardingLocation}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>Costs: </label>
          <select name="costs" onChange={(e) => this.handleChangeOffer(e)}>
            <option>Choose Type</option>
            <option value="unpaid">Unpaid</option>
            <option value="paid">Paid</option>
            <option value="contributing">Contributing</option>
          </select>
          <br />
          <label>Destiny: </label>
          <input
            type="text"
            name="destiny"
            value={this.state.destiny}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>Start: </label>
          <input
            type="text"
            name="start"
            value={this.state.start}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>Estimated time: </label>
          <input
            type="text"
            name="estimatedTime"
            value={this.state.estimatedTime}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>nationality: </label>
          <input
            type="text"
            name="nationality"
            value={this.state.nationality}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>Description: </label>
          <textarea
            type="text"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>Age crew: </label>
          <input
            type="text"
            name="ageCrew"
            value={this.state.ageCrew}
            onChange={(e) => this.handleChangeOffer(e)}
          />
          <br />
          <label>Journey: </label>
          <select name="journey" onChange={(e) => this.handleChangeOffer(e)}>
            <option>Choose Type</option>
            <option value="tourism">Tourism</option>
            <option value="cruising">Cruising</option>
            <option value="regatta">Regatta</option>
            <option value="charter">Charter</option>
          </select>
          <br />
          <label>Experience: </label>
          <select name="experience" onChange={(e) => this.handleChangeOffer(e)}>
            <option>Choose Type</option>
            <option value="no required">No required</option>
            <option value="required">Required</option>
          </select>
          <br />
          <label>Sea miles: </label>
          <select name="seaMiles" onChange={(e) => this.handleChangeOffer(e)}>
            <option>Choose Type</option>
            <option value="no required">No required</option>
            <option value="more than 100 miles">More than 100 miles</option>
            <option value="more than 1000 miles">More than 1000 miles</option>
            <option value="more than 10000 miles">More than 10000 miles</option>
          </select>
          <br />
          <label>Image: </label>
          <input
            type="file"
            name="offerImage"
            onChange={(e) => this.handleFileUpload(e)}
          />
          <div className="submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
        <button className="login-button">
          <Link to={`/offers/user/boats/${this.props.match.params.id}`}>
            Back to Offer
          </Link>
        </button>
      </div>
    );
  }
}
export default withAuth(EditOffer);
