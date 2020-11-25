import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

 class OfferCrewDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
      }
    
      getSingleOffer = () => {
        const { params } = this.props.match;
        axios.get(`${process.env.REACT_APP_API_URI}/offers/crew/${params.id}`)
        .then( crewDetails =>{
          const theCrewDetails = crewDetails.data;
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
                <img className="carddetail-image" src={this.state.image} alt="Photo Profile"></img>
                <p><b>User name:</b> {this.state.username} </p>
                <hr className="hr-bars"/>
                <p><b>Disponibility:</b> {this.state.disponibility} </p>
                <hr className="hr-bars"/>
                <p><b>Experience:</b> {this.state.experience} </p>
                <hr className="hr-bars"/>
                <p><b>Age:</b> {this.state.age}</p>
                <hr className="hr-bars"/>
                <p><b>Gender:</b> {this.state.gender}</p>
                <hr className="hr-bars"/>
                <p><b>Contact to :</b>{this.state.email}</p>
                <hr className="hr-bars"/>
                <p><b>Languages:</b> {this.state.languages}</p>
                <hr className="hr-bars"/>
                <p><b>Current country:</b> {this.state.country}</p>
                <hr className="hr-bars"/>
                <p><b>Current city:</b> {this.state.city}</p>
                <hr className="hr-bars"/>
                </div>
                <button className="login-button"><Link to="/crewPage">Go back</Link></button>
            </div>
        )
    }
}


export default withAuth(OfferCrewDetail);