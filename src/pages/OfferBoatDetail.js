import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";



 class OfferBoatDetail extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


export default withAuth(OfferBoatDetail);