import React from "react"

import { Button } from 'reactstrap';
import { Input } from "reactstrap"

const Form = props => (
  <form onSubmit={props.getPokemon}>
    <Input type="text" name="pokemonName" placeholder="Type a Pokemon..." />
    <Button outline color="primary">Search</Button>
  </form>
)

export default Form