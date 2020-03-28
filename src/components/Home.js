import React from "react"

import Pokemon from "./Pokemon"
import Form from "./Form"

const API_KEY_USAGE = "https://pokeapi.co/api/v2/pokemon/ditto/"

class Home extends React.Component{
  state = {
    pokemons: []
  }
  
  getPokemon = async (e) => {
    e.preventDefault()
    const pokemonName = e.target.elements.pokemonName.value
    const api_call = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
    const data = await api_call.json()
    if(pokemonName) {
      this.setState({
        pokemons: data
      })
    } else {
      this.setState({
        pokemons: undefined
      })
    }
    console.log(this.state.pokemons)
  }
  
  render(){
    return(
      <div className="div">
        <h3 style={{ textAlign: "center" }}>Pokemon App Searcher</h3>
        <div className="inner-div" style={{ paddingTop: "2rem"}}>
          <Form getPokemon={this.getPokemon}/>
          <Pokemon pokemon={this.state.pokemons}/>
        </div>
      </div>
    )
  }
}

export default Home