import React, { Component } from 'react'
import Avatar from "@material-ui/core/Avatar"
import './css/Signup.css'
// import './Userservice.js'
import axios from 'axios';

const URL='http://localhost:8080/api/users';

class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstname:'',
            lastname:'',
            userId:'',
            password:'',
        }
    }

    validate=e=>{
        if(this.state.firstname.length>=4 && this.state.lastname.length>=4 && this.state.userId.length>=4 && this.state.password.length>=4 ){
            this.enroll();
        }
        else{
            alert('all field\'s required maximum of 4 letters'+'\n fill the form correctly');
        }
    }

    enroll=() => { 
        let user={firstName:this.state.firstname,lastName:this.state.lastname,userId:this.state.userId,password:this.state.password};

        axios.post(URL,user).then(res=>{
            this.call();
            // console.log("done")
        });
        
    }
    call=()=>{
        window.location="\Login"
    }

    render() {
        return (
            <div>
                <div  className="full-page" >
                <div class="container r mt-5 d-flex  flex-row justify-content-center align-items-center">
                <div   className="page" >
                 <div className="post_header ">
                     <h3>SIGNUP:</h3>
                    <Avatar className="post_avatar" />
                   {/*alt= "chan"  src="/static/images/avatar/1.jpg" */}
                </div>
                <div className="form">
                    <from >
                        <div  className="firstname">
                            <lable >FIRSTNAME:</lable>
                            <input className="firstnameinput"type="text"  name="firstname" required
                            value={this.state.firstname} onChange={(e)=> this.setState({firstname:e.target.value})} />
                        </div>
                        <div  className="lastname">
                            <lable >LASTNAME:</lable>
                            <input className="lastnameinput"type="text"  name="lastname" required
                            value={this.state.lastname} onChange={(e)=> this.setState({lastname:e.target.value})} />
                        </div>
                        <div className="forminput1-sp">
                            <lable >USERID:</lable>
                            <input className="formuser"type="text"  name="userid" required
                            value={this.state.userId} onChange={(e)=> this.setState({userId:e.target.value})} />
                        </div>
                        <div className="passwordinput">
                            <lable>PASSWORD:</lable>
                            <input  className="fromuser2"type="password" name="password"  required
                            value={this.state.password} onChange={(e)=> this.setState({password:e.target.value})}/>
                        </div>
                        <button  type="submit" className="btn btn-secondary mt-4 btn-sp"  onClick={this.validate}>Signup</button>
                    </from>
                </div>

                
                </div></div>
            </div>
            </div>
        )
    }
}

export default Signup