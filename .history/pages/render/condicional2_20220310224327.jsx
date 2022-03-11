import If from "../../componentes/If";

export default function condicional1() {
  const numero = 3
  return (
    <div>
      <If teste={numero % 2 === 0}>
        <h1>O numero e par</h1>
      </If>
    </div>
  )
}