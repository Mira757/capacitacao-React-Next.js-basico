import { useState } from "react"

export default function contador() {

  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  

  function aumentar () {

  }

  function diminuir() {

  }

  return (
    <div>
      <h1>Valor:</h1>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  )
}