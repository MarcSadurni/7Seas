import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    //console.log('Login -> form submit', { username, password });
    this.props.login({ username, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div className="login">
          <div className="login-header">
            <h1>Login</h1>
          </div>
          <div className="login-form">
            <form onSubmit={this.handleFormSubmit}>
              <h3>Username:</h3>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={this.handleChange}
              />

              <h3>Password:</h3>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={this.handleChange}
              />

              <input type="submit" value="Login" class="login-button" />

            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(Login);
