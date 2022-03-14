import { Component } from "react";
import ContadorBla from "../../componentes/ContadorBla";

export default class ContadorPage extends Component {

  render() {
    return(
      <>
      <ContadorBla valorinicial={100} passo/>
      </>
      
    )
  }
}