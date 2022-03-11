export default function mouse() {
  const estilo = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
  }

  return (
    <div style={estilo}>
      <span>Eixo X:</span>
    </div>
  )
}