import { useState } from "react";
import ContadorDisplay from "../../componentes/ContadorDisplay"
import { mega } from "../../functions/mega";

export default function megasena() {
  const [numeros,setNumeros] = useState(mega())

  function renderNumeros() {
    return numeros.map(n => <ContadorDisplay numero={numero} />)
  }

}