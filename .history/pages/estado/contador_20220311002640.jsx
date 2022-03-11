import { useState } from "react"

export default function contador() {

  let [z,setZ] = useState(0)

    function aumentar () {
    setZ(z+1)
    }

    function diminuir() {
    setZ(z-1)
    }

  return (
    <div>
      <h1>Valor: {z} </h1>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  )
}