import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider"
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import EditUser from "./pages/EditUser"
import EditBoat from "./pages/EditBoat"

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} /> 
            <AnonRoute exact path='/signup' component={Signup} />
            <AnonRoute exact path='/login' component={Login} />
            <PrivateRoute exact path='/private' component={Private} />
            <PrivateRoute exact path='/profile/:id' component={Profile} />
            <PrivateRoute exact path='/profile/:id/editUser' component={EditUser} />
            <PrivateRoute exact path='/profile/:id/editBoat' component={EditBoat} />
          </Switch>
         
        </div>
      </AuthProvider>
    );
  }
}

export default App;

