import React, { Component } from "react"
import { api } from "../api"

class Home extends Component {
  componentDidMount() {
    api().notAllowed()
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
      </div>
    )
  }
}

export default Home
