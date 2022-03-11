export default function ContadorDisplay(props) {
  return (
    <div>
      <h1 style={{
        color: "purple",
      }}>CONTADOR</h1>
      <h1 style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>{props.numero}</h1>
    </div>
  )
}