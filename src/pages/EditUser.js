import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username,
      age: this.props.user.age,
      gender: this.props.user.gender,
      disponibility: this.props.user.disponibility,
      email: this.props.user.email,
      languages: this.props.user.languages,
      country: this.props.user.country,
      city: this.props.user.city,
      experience: this.props.user.experience,
      lookingForSailAsCrew: this.props.user.lookingForSailAsCrew,
      image: this.props.user.image,
      hasBoat: this.props.user.hasBoat,
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let {
      username,
      age,
      gender,
      disponibility,
      email,
      languages,
      country,
      city,
      experience,
      hasBoat,
      lookingForSailAsCrew,
      image,
    } = this.state;

    axios
      .put(
        `${process.env.REACT_APP_API_URI}/profile/${this.props.match.params.id}/editUser`,
        {
          username,
          age,
          gender,
          disponibility,
          email,
          languages,
          country,
          city,
          experience,
          lookingForSailAsCrew,
          hasBoat,
          image,
        }
      )
      .then(() => {
        this.props.history.push(
          `/gettingProfile/${this.props.match.params.id}`
        );
      })
      .catch((error) => console.log(error));
  };

  handleChangeUser = (event) => {
    let { name, value } = event.target;
    if (name === "lookingForSailAsCrew" && value === "on") {
      value = !this.state.lookingForSailAsCrew;
    }
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
        <h1>Edit User</h1>
        <form className="edit-info" onSubmit={this.handleFormSubmit}>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleChangeUser(e)}
          />
          <br />
          <label>Age: </label>
          <input
            name="age"
            value={this.state.age}
            onChange={(e) => this.handleChangeUser(e)}
          />
          <br />
          <label>Gender: </label>
          <select name="gender" onChange={(e) => this.handleChangeUser(e)}>
            <option>Choose Type</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br />
          <label>Disponibility: </label>
          <input
            type="text"
            name="disponibility"
            value={this.state.disponibility}
            onChange={(e) => this.handleChangeUser(e)}
          />
          <br />
          <label>Email: </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={(e) => this.handleChangeUser(e)}
          />
          <br />
          <label>Languages: </label>
          <input
            type="text"
            name="languages"
            value={this.state.languajes}
            onChange={(e) => this.handleChangeUser(e)}
          />
          <br />
          <label>Country: </label>
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={(e) => this.handleChangeUser(e)}
          />
          <br />
          <label>City: </label>
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={(e) => this.handleChangeUser(e)}
          />
          <br />
          <label>Experience: </label>
          <select name="experience" onChange={(e) => this.handleChangeUser(e)}>
            <option>Choose Type</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <br />
          <label>Looking For Sail As Crew: </label>
          <input
            type="checkbox"
            name="lookingForSailAsCrew"
            checked={this.state.lookingForSailAsCrew}
            onChange={(e) => this.handleChangeUser(e)}
          />

          <br />
          <label>Image: </label>
          <input
            type="file"
            name="image"
            onChange={(e) => this.handleFileUpload(e)}
          />
          <br />
          <div className="submit">
            <input className="login-button" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default withAuth(EditUser);
