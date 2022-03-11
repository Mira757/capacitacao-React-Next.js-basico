export default function ContadorDisplay(props) {
  return (
    <div>
      <h1 style={{
        color: "purple",
        border: "1px solid black"
      }}>CONTADOR</h1>
      <h1>{props.numero}</h1>
    </div>
  )
}