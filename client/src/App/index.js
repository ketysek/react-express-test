import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"

import OwnBrowserRouter from "./BrowserRouter"
import HomePage from "../Page/Home"
import NotAuthorizedPage from "../Page/NotAuthorized"

class App extends Component {
  render() {
    return (
      <OwnBrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/not-authorized" component={NotAuthorizedPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </OwnBrowserRouter>
    )
  }
}

export default App
