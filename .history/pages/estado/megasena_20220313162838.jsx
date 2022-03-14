import { useState } from "react";
import ContadorDisplay from "../../componentes/ContadorDisplay"
import { mega } from "../../functions/mega";

export default function megasena() {
  const [numeros,setNumeros] = useState(mega())

  function renderNumeros() {
    return numeros.map(numero => <ContadorDisplay key={numero} numero={numero} />)
  }

  return (
  <div style={{
    display: "flex",
    justifyContent: "column",
  }}>
      <h1>Mega Sena</h1>
      <div style={{display: "flex"}}>
        {renderNumeros()}
      </div>
      <div>
        <button onClick = {() => setNumeros(mega())}> Gerar aposta </button>
      </div>
    </div>
  )

}