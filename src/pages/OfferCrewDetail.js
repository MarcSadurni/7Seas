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
      componentDidMount(){
        this.getSingleOffer();
      }

      getSingleOffer = () => {
        const { params } = this.props.match;
        // console.log(params, "kkkkkkkkkkkkkkkkkkkkk")
        axios.get(`http://localhost:4000/offers/crew/${params.id}`)
        .then( crewDetails =>{
          const theCrewDetails = crewDetails.data;
          console.log(crewDetails.data, "wwwwwwwwwwwwwww")
          this.setState(theCrewDetails);
        })
        .catch((err)=>{
            console.log(err)
        })
      }

    render() {
        
        return (
            <div>
                <h1>holaaa</h1>
                <p></p>
            </div>
        )
    }
}


export default withAuth(OfferCrewDetail);