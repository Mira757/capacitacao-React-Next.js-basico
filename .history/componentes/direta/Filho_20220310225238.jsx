export default function Filho(props) {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <h3>{props.filho}</h3>
      <h2>{props.familia}</h2>
    </div>
  )
}