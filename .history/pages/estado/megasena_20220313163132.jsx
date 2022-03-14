import { useState } from "react";
import ContadorDisplay from "../../componentes/ContadorDisplay"
import { mega } from "../../functions/mega";

export default function megasena() {
  const [qtde, setQtde] = useState(6)
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
        <input type="number" min={6} max={20} value={qtde} onChange= {ev => setQtde(ev.target.value)}/>
        <button onClick = {() => setNumeros(mega())}> Gerar aposta </button>
      </div>
    </div>
  )

}