import React from "react"
import "./App.css"

import Main from "./components/Main"

import NavBar from "./components/layout/NavBar"

class App extends React.Component{
  render(){
    return(
      <div className="div">
        <NavBar/>
        <Main/> 
      </div>
    )
  }
}

export default App