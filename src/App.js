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
import EditBoat from "./pages/EditBoat";
import EditOffer from "./pages/EditOffer"
import CreateBoat from "./pages/CreateBoat";
import CreateOffer from "./pages/CreateOffer";
import OfferBoat from "./pages/OfferBoat";
import OfferCrew from "./pages/OfferCrew";
import OfferBoatDetail from "./pages/OfferBoatDetail";
import OfferCrewDetail from "./pages/OfferCrewDetail";



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
            <PrivateRoute exact path='/gettingProfile/:id' component={Profile} />
            <PrivateRoute exact path='/creatingBoat/:id' component={CreateBoat} />
            <PrivateRoute exact path='/creatingOffer/:id' component={CreateOffer} />
            <PrivateRoute exact path='/editingUser/:id' component={EditUser} />
            <PrivateRoute exact path='/editingBoat/:id' component={EditBoat} />
            <PrivateRoute exact path='/edittingBoat/userProfile/:id' component={EditOffer} />
            <PrivateRoute exact path='/boatsDetails/:id' component={OfferBoatDetail} />
            <PrivateRoute exact path='/crewDetails/:id' component={OfferCrewDetail} />
            <Route exact path='/boatsPage' component={OfferBoat} /> 
            <Route exact path='/crewPage' component={OfferCrew} /> 

          </Switch>
         
        </div>
      </AuthProvider>
    );
  }
}

export default App;

