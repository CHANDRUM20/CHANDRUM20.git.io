import React, { Component } from 'react';
import {Link } from "react-router-dom";
import { Button,Form } from 'react-bootstrap';
import Welcome from './Welcome';


class X extends Component {

  constructor(props){
    super(props);

    this.state = {
      myName: '',
      email: ''  
    }
  } 

  validate=(e) => { 
      
    console.log("done");
    };
  

  ChangeName = (e) => {    
    this.setState({
      myName: e.target.value
    });
  }

  ChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  }
  render() {
    return (
      // <div className="Login">
        // <Link to="/Welcome">
        // 	<Button color="white" className="is-rounded">
        //        <span>My Account</span>
        //   </Button>
        // </Link>
      // </div>
      <div className="Login">
        <form>
            Name: <input type="text"  onChange={this.ChangeName}/>
            <br />
            Email: <input type="text"  onChange={this.ChangeEmail} />
            <br /><br />
            <input type="button" value="Submit" onClick={this.submitForm}/>
            <Link to={{ pathname:"/Welcome", data:this.state }} >
              <Button color="white" className="is-rounded" onClick={this.validate}>
                  <span>My Account</span>
              </Button>
            </Link>
        </form>
      </div>
    );
  }
}

export default X;
