import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Link,} from 'react-router-dom';
import Services from './Services';

class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {
             username1:'',
             username2:'',
             password1:'',
             password2:'',
             isLoginSuccessful:false
        }
    }
    validate = e => {
        e.preventDefault();
        console.log(this.state);
        let requestData={
            email:this.state.username2,
            password:this.state.password2
        }
        Services.getServices(requestData).then((response)=>{
            //this.setState({username1 : response.data.email,password1:response.data.password})
        this.setState({isLoginSuccessful:response.data})
        })
        if((this.state.username1===this.state.username2 && this.state.password1===this.state.password2)||this.state.isLoginSuccessful){
            //<Link to="/MainPage?:Username=+{this.Username2}"></Link>
            let url=window.location.origin+"/MainPage?:Username=+"+this.state.username2;
            window.location.replace(url);
        }
        else{
            return(
                console.log("error")
            )
        }
    }

    render(){    
    return (
                <div style={{
                    marginTop: '50px',
                    marginLeft: '35%',
                    marginRight: '35%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '400px',
                    minWidth: '350px',
                    maxWidth: '350px',
                    borderRadius: '25px',
                    border: '1px solid red'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                        <h3 style={{
                            fontSize: '30px',
                            fontWeight: '400',
                            padding: '10px',
                        }}>
                            Login
                    </h3>
                        <Avatar alt='Login'>
                        </Avatar>
                    </div>
                    <br />
                    <form onSubmit={this.validate} style={{
                        alignItems: 'center',
                        justifyContent: 'spacebetween',
                    }}>
                        <label>User ID : </label>
                        <input type="text" name=" Username" value={this.state.username2} onChange={(e)=> this.setState({username2:e.target.value})} style={{
                            marginLeft: '15px',
                            backgroundColor: 'lightGrey',
                            color: 'black',
                            border: '0px',
                            minHeight: '25px'
                        }} />
                        <br />
                        <br />
                        <label>Password : </label>
                        <input type="password" value={this.state.password2} onChange={(e)=> this.setState({password2:e.target.value})} style={{
                            backgroundColor: 'lightGrey',
                            color: 'black',
                            border: '0px',
                            minHeight: '25px'
                        }} />
                        <br />
                        <br />
                        <br />
                        <br />
                        <button onClick={this.validate} style={{
                            marginLeft: '40%',
                            alignContent: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '50px',
                            minWidth: '30px',
                            minHeight: '30px',
                            color: 'white',
                            backgroundColor: 'black'
                        }} type="submit">Login</button>
                    </form>
                </div>
        )
    }
}
export default Login
