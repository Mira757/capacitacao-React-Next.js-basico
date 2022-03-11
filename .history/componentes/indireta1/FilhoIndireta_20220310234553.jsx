export default function FilhoIndireta(props){
 
  console.log(props.funcao)
  return (
    <div>
      <button onClick={props.funcao}>Falar com o pai</button>
      <button onClick={() => props.funcao("Passei no ENEM!")}></button>
    </div>
    )
}