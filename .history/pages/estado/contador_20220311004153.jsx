import { useState } from "react"
import ContadorDisplay from "../../componentes/ContadorDisplay"

export default function contador() {

  let [z,setZ] = useState(0)

    /*function aumentar () {
    setZ(z+1)
    }

    function diminuir() {
    setZ(z-1)
    }*/

    const aumentar = () => setZ(z+1)
    const diminuir = () => setZ(z-1)

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
      }}>

      <ContadorDisplay numero = {z}/>
      
      <div>
        <button onClick={aumentar}>+</button>
        <button onClick={diminuir}>-</button>
      </div>
    </div>
  )
}