import { Component } from "react";
import Contador from "../../componentes/ContadorBla";

export default class ContadorPage extends Component {

  render() {
    return(
      <>
      <ContadorBla valorinicial={100} passo/>
      </>
      
    )
  }
}