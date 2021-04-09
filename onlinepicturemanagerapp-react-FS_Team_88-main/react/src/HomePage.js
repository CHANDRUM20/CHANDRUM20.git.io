import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render() {
        return (
            <div class="container" style={{
                marginTop: '50px',
                display: 'flex',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent:'space-evenly',
                minHeight: '200px',
                minWidth: '150px',
                maxWidth: '200px',
                borderRadius: '25px',
                border: '1px solid red'
            }}>
                <Link to="/Login"><button class="btn btn-danger">Login</button></Link>
                <Link to="/Signup"><button class="btn btn-primary">Signup</button></Link>
            </div>
        )
    }
}

export default HomePage
