import { useState } from "react/cjs/react.production.min"

export default function mouse() {

  const arrayX = useState(0)
  let x = array[0]
  const alterarX = array[1]

  
  const arrayY = useState(0)
  let y = array[0]
  const alterarY = array[1]

  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
  }

  function quandoMover(ev) {
    console.log(ev)
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>
        Eixo X: ?
      </div>
      <div>
        Eixo Y: ?
      </div>
    </div>
  )
}