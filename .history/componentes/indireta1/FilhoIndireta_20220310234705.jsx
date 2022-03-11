export default function FilhoIndireta(props){
 
  console.log(props.funcao)
  return (
    <div>
      <button onClick={props.funcao}>Falar com o pai 1</button>
      <button onClick={() => props.funcao("Passei no ENEM!","Salveeee","Doidera")}>
        Falar com o pai 2
        </button>
    </div>
    )
}