import If from "../../componentes/If";

export default function condicional1() {
  const numero = 2
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1>O numero e par</h1>
      </If>
      <If teste={numero % 2 === 1}>
        <h1>O numero e impar</h1>
      </If>
        
    </div>
  )
}