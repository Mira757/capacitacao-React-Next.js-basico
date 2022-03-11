import { useState } from "react"

export default function contador() {

  let z = 0

  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  
  function quandoMover(ev) {
    setX(z+1)
    alterarY(z-1)
  }

  function aumentar () {

  }

  function diminuir() {

  }

  return (
    <div>
      <h1>Valor: {z}</h1>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  )
}