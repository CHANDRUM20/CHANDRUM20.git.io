import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Services from './Services';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor() {
        super()
    
        this.state = {
             Username:'',
             email:'',
             password:'',
        }
    }

    enroll=e => {
        e.preventDefault();          
        Services.postServices({prop:this.state})
        console.log(this.state);
        <Link to="/MainPage?:Username=+{this.Username}" />
    }

    render() {
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
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                }}>
                    <h3 style={{
                        fontSize: '30px',
                        fontWeight: '400',
                        padding:'10px',
                    }}>
                        Signup
                    </h3>
                    <Avatar alt='Login'>
                    </Avatar>
                </div>
                <br />
                <form onSubmit={this.enroll} style={{
                    alignItems: 'center',
                    justifyContent: 'spacebetween',
                }}>
                    <label>Username : </label>
                    <input type="text" name="username" value={this.state.username} onChange={(e)=> this.setState({Username:e.target.value})} style={{
                        backgroundColor: 'LightGrey',
                        color: 'black',
                        border: '0px',
                        minHeight: '25px'
                    }} />
                    <br />
                    <br />
                    <label>Email-ID : </label>
                    <input type="text" name=" email" value={this.state.email} onChange={(e)=> this.setState({email:e.target.value})} style={{
                        marginLeft: '15px',
                        backgroundColor: 'lightGrey',
                        color: 'black',
                        border: '0px',
                        minHeight: '25px'
                    }} />
                    <br />
                    <br />
                    <label>Password : </label>
                    <input type="password" value={this.state.password} onChange={(e)=> this.setState({password:e.target.value})} style={{
                        backgroundColor: 'lightGrey',
                        color: 'black',
                        border: '0px',
                        minHeight: '25px'
                    }} />
                    <br />
                    <br />
                    <button style={{
                        marginLeft: '40%',
                        alignContent: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50px',
                        minWidth: '30px',
                        minHeight: '30px',
                        color: 'white',
                        backgroundColor: 'black'
                    }} type="submit">Signup</button>
                </form>
            </div>
        )
    }
}

export default Signup
