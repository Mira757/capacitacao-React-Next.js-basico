import { Component } from "react";

export default class Contador extends Component {

  state = {
    numero: this.props.valorinicial ?? 0
  }

  inc = () => {
    this.setState ({
      numero: this.state.numero + 1
    })
  }

  dec = () => {
    this.setState ({
      numero: this.state.numero - 1
    })
  }

  render() {
    return(
      <div>
        <h1>Salve</h1>
        <h2>{this.props.valorinicial}</h2>
        <button onClick={this.inc()}>+</button>
        <button onClick={this.dec()}>-</button>
      </div>
    )
  }
}