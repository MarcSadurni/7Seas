import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from "../lib/AuthProvider";



class Profile extends Component {
    state = {
        userid : this.props.user._id,
        user :{}
    }

    getProfile = async () =>{
        try {
            console.log(this.props.profile, "profile")
            console.log(this.props.user._id, "user id")
            const res = await this.props.profile(this.props.user._id)
        console.log(res)
        } catch (error) {
           console.log(error) 
        }
    }
    componentDidMount(){
       this.getProfile()
    }
    render() {
        console.log(this.props, "es un props")
        // console.log(this.props.profile, "profileeeee")
        // console.log(this.state.userid, "es un user")
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