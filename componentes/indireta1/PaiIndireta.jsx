import FilhoIndireta from "./FilhoIndireta";

export default function PaiIndireta(props){

  function falarComigo(param1,param2,param3) {
    console.log(param1,param2,param3)
  }

  return (
    <div>
      <FilhoIndireta funcao={falarComigo}/>
    </div>
    )
}