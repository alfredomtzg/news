import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home"
import Login from '../pages/Login'



const Routes = () => {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </Switch>

    </Router>
  )
}

export default Routes