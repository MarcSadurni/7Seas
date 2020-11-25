import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class CreateBoat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boatName: "",
      year: "",
      typeBoat: "power",
      country: "",
      currentLocation: "",
      crewNumber: "",
      rooms: "",
      length: "",
      image: "",
      owner: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {
      boatName,
      year,
      typeBoat,
      country,
      currentLocation,
      owner,
      crewNumber,
      rooms,
      length,
      image,
    } = this.state;

    axios
      .post(
        `${process.env.REACT_APP_API_URI}/profile/${this.props.match.params.id}/createBoat`,
        {
          boatName,
          year,
          typeBoat,
          country,
          currentLocation,
          crewNumber,
          rooms,
          length,
          image,
          owner,
        }
      )
      .then(() => {
        this.props.history.push(
          `/gettingProfile/${this.props.match.params.id}`
        );
      })
      .catch((error) => console.log(error));
  };
  handleCreateBoat = (event) => {
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
      this.setState({ image: res.secure_url });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="edit">
        <hr />
        <h3>Create your Boat</h3>
        <form className="edit-info" onSubmit={this.handleFormSubmit}>
          <label>Boat name: </label>
          <input
            type="text"
            name="boatName"
            value={this.state.boatName}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <br />
          <label>Year: </label>
          <input
            name="year"
            value={this.state.year}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <br />
          <label>Type of boat: </label>
          <select name="typeBoat" onChange={(e) => this.handleCreateBoat(e)}>
            <option>Choose Type</option>
            <option value="power">Power</option>
            <option value="sail">Sail</option>
          </select>
          <br />
          <label>Country: </label>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <br />
          <label>current Location: </label>
          <input
            type="text"
            name="currentLocation"
            value={this.state.currentLocation}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <br />
          <label>Crew number: </label>
          <input
            type="text"
            name="crewNumber"
            value={this.state.crewNumber}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <br />
          <label>Rooms: </label>
          <input
            type="text"
            name="rooms"
            value={this.state.rooms}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <br />
          <label>Length: </label>
          <input
            type="text"
            name="length"
            value={this.state.length}
            onChange={(e) => this.handleCreateBoat(e)}
          />
          <br />
          <label>Image: </label>
          <input type="file" onChange={(e) => this.handleFileUpload(e)} />
          <input type="submit" value="Submit" />
        </form>
        <button>
          <Link to={`/gettingProfile/${this.props.match.params.id}`}>
            Back to my profile
          </Link>
        </button>
      </div>
    );
  }
}
export default withAuth(CreateBoat);
