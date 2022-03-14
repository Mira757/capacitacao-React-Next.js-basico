import { Component } from "react";
import Contador from "../../componentes/ContadorDisplay";

export default class ContadorPage extends Component {

  render() {
    return(
      <>
      <Contador valorinicial={100}/>
      <Contador />
      </>
      
    )
  }
}