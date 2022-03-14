import { Component } from "react";
import Contador from "../../componentes/Contador";

export default class ContadorPage extends Component {

  render() {
    return(
      <>
      <Contador valorinicial={100} passo/>
      </>
      
    )
  }
}