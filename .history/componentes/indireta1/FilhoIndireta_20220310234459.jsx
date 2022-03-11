export default function FilhoIndireta(props){
  // "Passei no ENEM!"
  console.log(props.funcao)
  return (
    <div>
      <button onClick={props.funcao}>Falar com o pai</button>
    </div>
    )
}