import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
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
          <p className="title-profile"><b>Bienvenido {this.state.user.username ? this.state.user.username:undefined}
          </b></p>
        </div>
        <img src={this.state.user.image} alt="foto" className="profile-image"/>
        <section className="profile-links">
          
          {!this.state.user.hasBoat ? (
            <Link to={`/creatingBoat/${this.props.match.params.id}`}>
              {" "}
              <button className="profile-button">Add your boat</button>
            </Link>
          ) : (
            <Link to={`/editingBoat/${this.state.boat[0]._id}`}>
              {" "}
              <button className="profile-button">Edit Boat</button>
            </Link>
          )
          }
          {this.state.user.hasBoat ? (
            <Link to={`/creatingOffer/${this.props.match.params.id}`}>
            {" "}
            <button className="profile-button">Create Offer</button>
          </Link>
          ):null}

          <Link to={`/editingUser/${this.props.user._id}`}>
            
            <button className="profile-button">Edit Profile</button>
          </Link>
        </section>
        <section className="profile-list">
          <div className="profile-list-title">
            <b>My current offers:</b>
          </div>
          <div className="cards-profileLaptop">
        {this.state.offers
          ? this.state.offers.map((data, index) => {
              return (
                
                  <div className="profile-list-info">        
                    <br/>
                    <img src={data.offerImage} alt="Offer Image" className="image-offer"/>
                    <br/>
                    <p><b>Destination:   </b>{data.destiny}</p>
                  </div>  
              );
            })
          : null}
           </div>
          </section>
      </div>
    );
  }
}

export default withAuth(Profile);
