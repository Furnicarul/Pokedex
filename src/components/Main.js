import React from "react"

import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Home from "./Home"
import Api from "./Api"

const Main = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/api" component={Api} />
    </Switch>
  </Router>
)

export default Main