import { useState } from "react";
import ContadorDisplay from "../../componentes/ContadorDisplay"
import { mega } from "../../functions/mega";

export default function megasena() {
  const [numeros,setNumeros] = useState(mega())

  function renderNumeros() {
    return numeros.map(numero => <ContadorDisplay key={numero} numero={numero} />)
  }

  return (
    <div>
      <h1>Mega Sena</h1>
      <div>
        {renderNumeros()}
      </div>
    </div>
  )

}