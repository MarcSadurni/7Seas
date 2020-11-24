import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={"/"} id="home-btn">
          <h4>Home</h4>
        </Link>
        {isLoggedin ? (
          <>
            <button className="navbar-button" onClick={logout}>
              Logout
            </button>
            <div className="narvbar-perfil">
              <Link to={`/gettingProfile/${this.props.user._id}`}>
                Ir a profile
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
