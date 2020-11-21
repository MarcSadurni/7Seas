import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";
import axios from "axios";
import service from "../lib/auth-service"



class Profile extends Component {
    state = {
        userId : this.props.user._id,
        user: {}
        
    }

    getProfile = async () =>{
        try {
            const res = await service.profile(this.props.user._id)
            let ofertaGet = await axios.get(`http://localhost:4000/profile/user/${this.props.match.params.id}`)
            this.setState({user: res, offers: ofertaGet.data})
       
        } catch (error) {
           console.log(error) 
        }
    }

    componentDidMount(){
        this.getProfile()
    }
   
    render() {
        return (
            <div>
                {this.state.offers ? this.state.offers.map(data =>{


                return (
                    
                    <div>
                        
                        <div>
                            
                            <h1>bienvenido: {this.state.user.username}</h1>
                        </div>
                   <div>
                      <img src={this.state.user.image} alt="foto"/>
                    <p>My offers : {data.destiny}</p>
                   </div>
                   </div>
                )
            }) : null}
              <section>     
        <Link to ={`/profile/${this.props.match.params.id}/createOffer`}> <button>Create an Offer</button></Link>
        <Link to ={`/profile/${this.props.match.params.id}/createBoat`}> <button>Add your boat</button></Link>
        <Link to ={`/profile/${this.props.user._id}/editUser`}> <button>Edit your Profile</button></Link>
        <Link to ={`/profile/${this.props.user._id}/editBoat`}> <button>Edit your Boat</button></Link>
              </section> 
              

            </div>
        )
    }
}

export default withAuth(Profile);