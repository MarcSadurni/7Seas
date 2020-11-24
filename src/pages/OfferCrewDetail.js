import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";



 class OfferCrewDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
      }
    

      getSingleOffer = () => {
        const { params } = this.props.match;
        // console.log(params, "kkkkkkkkkkkkkkkkkkkkk")
        axios.get(`${process.env.REACT_APP_API_URI}/offers/crew/${params.id}`)
        .then( crewDetails =>{
          const theCrewDetails = crewDetails.data;
        //   console.log(theCrewDetails, "wwwwwwwwwwwwwww")
          this.setState(theCrewDetails);
        })
        .catch((err)=>{
            console.log(err)
        })
      }

      componentDidMount(){
        this.getSingleOffer();
      }

    render() {
        
        return (
            <div className="offerDetail">
                <h1>Sailor Details</h1>
                <div className="offerDetail-info">
                  <div className="offerDetail-image">
                <img src={this.state.image} alt="Photo Profile"></img>
                </div>
                <p>User name: {this.state.username} </p>
                <p>Disponibility: {this.state.disponibility} </p>
                <p>Experience: {this.state.experience} </p>
                <p>Age: {this.state.age}</p>
                <p>Gender: {this.state.gender}</p>
                <p>Contact to :{this.state.email}</p>
                <p>Languages: {this.state.languages}</p>
                <p>Current country: {this.state.country}</p>
                <p>Current city: {this.state.city}</p>
                </div>
                <button className="login-button"><Link to="/crewPage">Go back</Link></button>
            </div>
        )
    }
}


export default withAuth(OfferCrewDetail);