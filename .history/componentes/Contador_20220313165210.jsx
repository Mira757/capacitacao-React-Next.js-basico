import { Component } from "react";

export default class Contador extends Component {

  state = {
    numero: 7
  }

  render() {
    return(
      <div>
        <h1>Salve</h1>
        <h2>{this.props.valorinicial}</h2>
      </div>
    )
  }
}