import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";



 class OfferBoatDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
      }
    

      getSingleOffer = () => {
        const { params } = this.props.match;
         console.log(params, "kkkkkkkkkkkkkkkkkkkkk")
        axios.get(`http://localhost:4000/offers/boats/${params.id}`)
        .then( boatDetails =>{
          const theBoatDetails = boatDetails.data;
           console.log(boatDetails, "wwwwwwwwwwwwwww")
          this.setState(theBoatDetails);
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
            <div>
                <h1>hello</h1>
                <p>Cost: {this.state.costs} </p>
                <p>Destiny: {this.state.destiny} </p>
                <p>Experience: {this.state.experience} </p>
            </div>
        )
    }
}


export default withAuth(OfferBoatDetail);