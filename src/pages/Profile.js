import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from "../lib/AuthProvider";
import auth from "../lib/auth-service";



class Profile extends Component {
    state = {
        userid : this.props.user._id,
        user :{}
    }

    getProfile = async () =>{
        try {
            
            const res = await auth.profile(this.props.user._id)
            this.setState({
                user: res
            })
        } catch (error) {
           console.log(error) 
        }
    }
    componentDidMount(){
       this.getProfile()
    }
    render() {
        console.log(this.state.user)
        return (
            <div>
                <section>
        <p>Hello:</p>
              <img src="" alt=""/>
              </section> 
              <section>
                
      
                  
        {/* <Link to ={`/profile/edit/${user._id}`}> <button> Edit Profile</button></Link> */}
        <Link to ="/profile/createoffer/"> <button>Create an Offer</button></Link>
              </section> 
            </div>
        )
    }
}

export default withAuth(Profile);