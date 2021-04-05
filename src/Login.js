
import React, { Component, useState } from 'react'
import {Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar"
import './css/Login.css'
import axios from 'axios';
import { Redirect } from "react-router-dom"; 

import {  BrowserRouter as Router, Route} from "react-router-dom";
import App from './App';

const URL='http://localhost:8080/api/users';

let id=-1;

 class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userid:"",
            password:"",
        }
    }

            
    validate=(event)=>{
        var t =axios.get(URL).then(res=>{
            var x=(res.data);
            
            for (let i in x) {
                if(x[i].userId===this.state.userid && x[i].password===this.state.password){
                    id=i;  
                }
            }
            if(id===-1){
                window.location="\Login"
                alert("invalid userId Or Password");
            }
            else{
                console.log("done");
                
            }
            
        });
    }




    render() {
        return (
            <div  className="full-page" >
                <div class="container r mt-5 d-flex  flex-row justify-content-center align-items-center">
                <div   className="page" >
                 <div className="post_header ">
                     <h3>LOGIN PAGE:</h3>
                    <Avatar className="post_avatar" />
                </div>
                <div classname="from">
                    <from >
                        <div className="forminput1"> 
                            <lable >USERID:</lable>
                            <input className="form-user"type="text"  name="userid"  
                             value={this.state.userid} onChange={(e)=> this.setState({userid:e.target.value})} />
                        </div>
                        <div  className="forminput2">
                            <lable >PASSWORD:</lable>                            
                            <input  className="fromuser2"type="password" name="password" 
                             value={this.state.password} onChange={(e)=> this.setState({password:e.target.value})}/>
                        </div>
                        {/* <button  type="submit" className="btn btn-secondary btn-l mt-2" onClick={this.validate} > login</button> */}
                        <Link to={{ pathname:"/Welcome", data:this.state.userid }} >
                            <button  type="submit" className="btn btn-secondary btn-l mt-2" onClick={this.validate} > login</button>
                        </Link>
                        
                    </from>
                    <div className="signlink">
                        <p>Don't have an account? 
                        <Link to={{ pathname:"/Signup", }} >
                            <span > Sign up</span>
                        </Link>
                        </p>
                    </div>
                </div>
                </div></div>
            </div>
        )
    }
}

export default Login