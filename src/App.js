import React from "react";
import {  BrowserRouter as Router, Route} from "react-router-dom";
import X from './X';
import Login from './Login';
import Welcome from './Welcome';
import Signup from './Signup';



function App() {
  return (
  	<Router>
	    <Route exact path="/" component={Login}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Welcome" component={Welcome}/>
      <Route exact path="/Signup" component={Signup}/>
    </Router>
  );
}

export default App;
