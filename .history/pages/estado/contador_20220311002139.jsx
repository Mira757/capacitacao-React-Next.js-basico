import { useState } from "react"

export default function contador() {

  

  const [x,setX] = useState(0)
  const [y,setY] = useState(0)
  const [z,setZ] = useState(0)
  
  
    
    alterarZ(z)
  

    function aumentar () {
    setX(z+1)
    }

    function diminuir() {
    alterarY(z-1)
    }

  } 

  return (
    <div>
      <h1>Valor: {z}</h1>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  )
}