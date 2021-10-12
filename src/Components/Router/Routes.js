import React from "react";
import { BrowserRouter as Router ,Route,Switch } from "react-router-dom";
import Login from '../Login/Login';



export default function Routes() {
    return (

        <Router>
       <Switch>
           <Route exact path="/"><Login/></Route>
           <Route exact path="/SignUp">JoinNnnow</Route>
           <Route exact path="/SignIn">LogiiiiIn</Route>
       </Switch>
        </Router>
    )
}
