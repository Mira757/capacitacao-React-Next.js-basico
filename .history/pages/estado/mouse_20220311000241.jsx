import { useState } from "react/cjs/react.production.min"

export default function mouse() {

  const arrayX = useState(0)
  let x = arrayX[0]
  const alterarX = arrayX[1]

  
  const arrayY = useState(0)
  let y = arrayY[0]
  const alterarY = arrayY[1]

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
    alterarX(ev.clientX)
    alterarY(ev.clientY)
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>
        Eixo X: {alterarX}
      </div>
      <div>
        Eixo Y: {alterarY}
      </div>
    </div>
  )
}