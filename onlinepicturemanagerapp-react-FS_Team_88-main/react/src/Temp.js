import React, { Component } from 'react'
import { Route, BrowserRouter as Router,} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login'
import MainPage from './MainPage';
import Signup from './Signup';
import UserPage from './UserPage';

class Temp extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/MainPage" component={MainPage} />
                    <Route exact path="/MainPage/UserPage?+:id" component={UserPage}/>
                </div>
            </Router>
        )
    }
}

export default Temp
