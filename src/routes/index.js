import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Pages
import NotFound from "../pages/404";
import Home from "../pages/Home"
import Login from '../pages/Login'



const Routes = () => {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route component={NotFound} />
      </Switch>

    </Router>
  )
}

export default Routes