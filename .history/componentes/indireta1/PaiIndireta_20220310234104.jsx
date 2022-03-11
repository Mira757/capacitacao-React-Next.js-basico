import FilhoIndireta from "./FilhoIndireta";

export default function PaiIndireta(props){

  function falarComigo() {
    console.log("Falou cmg")
  }

  return (
    <div>
      <FilhoIndireta funcao={falarcomigo}/>
    </div>
    )
}