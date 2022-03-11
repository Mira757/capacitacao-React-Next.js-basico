import FilhoIndireta from "./FilhoIndireta";

export default function PaiIndireta(props){

  function falarComigo(param) {
    console.log(param)
    console.log("Falou cmg")
  }

  return (
    <div>
      <FilhoIndireta funcao={falarComigo}/>
    </div>
    )
}