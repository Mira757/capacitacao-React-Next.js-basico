export default function mouse() {
  const estilo = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
  }

  function quandoMover(ev) {
    console.log(ev)
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <div>
        Eixo X: ?
      </div>
      <div>
        Eixo Y: ?
      </div>
    </div>
  )
}