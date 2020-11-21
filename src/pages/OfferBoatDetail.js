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
        // console.log(params, "kkkkkkkkkkkkkkkkkkkkk")
        axios.get(`http://localhost:4000/offers/boats/${params._id}`)
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
                <h1>holaaa</h1>
                <p>Coste: {this.state.cost} </p>
                <p>Destino: {this.state.destiny} </p>
                <p>Experiencia: {this.state.experience} </p>
            </div>
        )
    }
}


export default withAuth(OfferBoatDetail);