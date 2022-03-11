export default function contador() {
  return (
    <div>
      <h1>Valor:</h1>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  )
}