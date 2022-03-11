export default function ContadorDisplay(props) {
  return (
    <div>
      <h1 style={{
        color: "purple",
      }}>CONTADOR</h1>
      <h1 style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
        width: "50px",
        border: "1px solid black",
        borderRadius: "25px",
        backgroundColor: "red"
      }}>{props.numero}</h1>
    </div>
  )
}