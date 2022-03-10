export default function Estilo(props) {
  return (
    <div>
      <h1 style={{
        backgroundColor: props.numero >= 0 ? "#2d2" : "#D22",
        color: "#fff",
        textAlign: props.direita ? "right" : "left"
      }}>
        Texto
      </h1>
    </div>
  )
}