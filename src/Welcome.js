import React, { Component } from 'react'
import {Link } from "react-router-dom";
import { Button,Form } from 'react-bootstrap';
import axios from 'axios';

const URL='http://localhost:8080/api/users';

class Welcome extends Component {
    constructor(props) {
        super(props)
        console.log(props.location.data);
        
    }

   
    // validate=(e) => { 
      
    //   console.log("done");
    //   };
      

  render() {
    return (
      <div className="Welcome" >
        <h1>Welcome {this.props.location.data}</h1>
        
      </div>
    );
  }
}
export default Welcome;
