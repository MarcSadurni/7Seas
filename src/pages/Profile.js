import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";
import axios from "axios";
import service from "../lib/auth-service";

class Profile extends Component {
  state = {
    userId: this.props.user._id,
    user: {},
  };

  getProfile = async () => {
    try {
      const res = await service.profile(this.props.match.params.id);
      let ofertaGet = await axios.get(
        `${process.env.REACT_APP_API_URI}/profile/user/${this.props.match.params.id}`
      );
      let boatData = await axios.get(
        `${process.env.REACT_APP_API_URI}/profile/boat/${this.props.match.params.id}`
      );
      this.setState({ user: res, offers: ofertaGet.data, boat :boatData.data });
    } catch (error) {
      console.log(error);
    }
  };
  

  componentDidMount() {
    this.getProfile();
  }

  render() {
    console.log(this.state.offers)
    return (
      <div className="profile-container">
        <div>
          <h1>Bienvenido: {this.state.user.username}</h1>
        </div>
        <img src={this.state.user.image} alt="foto" className="offer-image"/>
        <section className="profile-links">
          <Link to={`/creatingOffer/${this.props.match.params.id}`}>
            {" "}
            <button className="login-button">Create Offer</button>
          </Link>
          {!this.state.user.hasBoat ? (
            <Link to={`/creatingBoat/${this.props.match.params.id}`}>
              {" "}
              <button className="login-button">Add your boat</button>
            </Link>
          ) : (
            <Link to={`/editingBoat/${this.state.boat.id}`}>
              {" "}
              <button className="login-button">Edit Boat</button>
            </Link>
          )}

          <Link to={`/editingUser/${this.props.user._id}`}>
            
            <button className="login-button">Edit Profile</button>
          </Link>
        </section>
        
        {this.state.offers
          ? this.state.offers.map((data, index) => {
              return (
                
                <div>
                  
                  <div>
                    {/* <img src={this.state.user.image} alt="foto" /> */}
                    <p>My offers : {data.destiny}</p>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default withAuth(Profile);
