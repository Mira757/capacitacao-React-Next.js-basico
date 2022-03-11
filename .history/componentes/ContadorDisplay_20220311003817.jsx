export default function ContadorDisplay(props) {
  return (
    <div style={{
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1 style={{
        color: "purple",
      }}>CONTADOR</h1>
      <h1>{props.numero}</h1>
    </div>
  )
}