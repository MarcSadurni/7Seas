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
    return (
      <div className="profile-container">
        <div>
          <p className="title-profile"><b>Bienvenido: </b>{this.state.user.username}</p>
        </div>
        <img src={this.state.user.image} alt="foto" className="offer-image"/>
        <section className="profile-links">
          <Link to={`/creatingOffer/${this.props.match.params.id}`}>
            {" "}
            <button className="profile-button">Create Offer</button>
          </Link>
          {!this.state.user.hasBoat ? (
            <Link to={`/creatingBoat/${this.props.match.params.id}`}>
              {" "}
              <button className="profile-button">Add your boat</button>
            </Link>
          ) : (
            <Link to={`/editingBoat/${this.props.match.params.id}`}>
              {" "}
              <button className="profile-button">Edit Boat</button>
            </Link>
          )}

          <Link to={`/editingUser/${this.props.user._id}`}>
            
            <button className="profile-button">Edit Profile</button>
          </Link>
        </section>
        <section className="profile-list">
          <div className="profile-list-title">
            <b>My current offers:</b>
          </div>
        
        {this.state.offers
          ? this.state.offers.map((data, index) => {
              return (
                
                <div >
                  
                  <div className="profile-list-info">
                    {/* <img src={this.state.user.image} alt="foto" /> */}
                    
                    <br/>
                    <img src={data.offerImage} alt="Offer Image" className="image-offer"/>
                    <br/>
                    <p><b>Destination:   </b>{data.destiny}</p>
                  </div>
                </div>
              );
            })
          : null}
          </section>
      </div>
    );
  }
}

export default withAuth(Profile);
