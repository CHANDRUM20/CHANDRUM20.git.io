import React, { Component } from 'react'
import axios from 'axios'

export class UserServices extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: "keerthi",
             email: "kvasan2610@gmail.com",
             password: "123456",
             mobilenumber:"9999900000",
             li:'',
        }
    }
    
    componentDidMount(){
        const user={
            username:this.state.username,
            password:this.state.password,
            email:this.state.email,
            mobilenumber:this.state.mobilenumber,
        }
        axios.post('http://localhost:8080/signup/add',user)
        axios.get('http://localhost:8080/signup/getbyemail').then(res=>{this.setState({
            li:res.email
        })})
    }

    render() {
        return (
            <div>
                Hello {this.state.li}
            </div>
        )
    }
}

export default UserServices
