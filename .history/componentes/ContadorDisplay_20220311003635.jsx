export default function ContadorDisplay(props) {
  return (
    <div>
      <h1 style={{
        color: "pourple"
      }}>CONTADOR</h1>
      <h1>{props.numero}</h1>
    </div>
  )
}