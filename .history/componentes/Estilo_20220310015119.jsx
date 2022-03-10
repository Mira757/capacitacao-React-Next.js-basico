export default function Estilo(props) {
  return (
    <div>
      <h1 style={ {backgroundColor: props.numero >= 0 ? "#2d2" : "#D22"} }>Texto</h1>
    </div>
  )
}