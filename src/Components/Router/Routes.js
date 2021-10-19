import React from "react";
import { BrowserRouter as Router ,Route,Switch } from "react-router-dom";
import Login from '../Login/Login';
import Home from '../Home/Home.js';



export default function Routes() {
    return (

        <Router>
       <Switch>
           <Route exact path="/"><Login/></Route>
            <Route exact path="/SignUp">Coming Soon ....</Route> 
           <Route exact path="/SignIn"></Route>
           <Route exact path="/Home"><Home/></Route>
       </Switch>
        </Router>
    )
}
