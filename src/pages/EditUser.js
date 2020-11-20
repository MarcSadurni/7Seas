import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from "../lib/AuthProvider";


class EditUser extends Component {
    state = {
        userid : this.props.user._id,
        user :{}
    }

    // getEditUser = async () =>{
    //     try {
    //         console.log(this.props.user._id, "user id")
    //         const res = await this.props.profile(this.props.user._id)
    //     console.log(res)
    //     } catch (error) {
    //        console.log(error) 
    //     }
    // }
    // componentDidMount(){
    //    this.getProfile()
    // }
    render() {
     
        return (
            <div>
               
        <p>Edit user Page</p>
              
            </div>
        )
    }
}

export default withAuth(EditUser);