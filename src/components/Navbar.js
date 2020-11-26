import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
      
        <Link to={"/"} >
          <img className="logo-navbar" src="https://res.cloudinary.com/dh2lo8p1f/image/upload/v1606383116/fotos/220-2207378_ship-boat-silhouette-maritime-nautical-vessel-png-vehculos_qa2i6y.png"/>
        </Link>

        {isLoggedin ? (
          <div className="navbar-logged">
            <button className="navbar-button" onClick={logout}>
              Logout
            </button>
            <button className="navbar-button">
              <Link to={`/gettingProfile/${this.props.user._id}`}>
              Profile
              </Link>
              </button>
            </div>
        ) : (
          <div className="navbar-logged">
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">SignUp</button>
            </Link>
          </div>
        )}
      
      </nav>
    );
  }
}

export default withAuth(Navbar);
