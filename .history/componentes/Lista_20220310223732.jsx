export default function Lista(props) {
  return (
    <div>
      <h1>Salve</h1>
      <ul style={{
        liststyle: "none",
        padding: 0px
      }}>
        {props.children}
      </ul>
  </div>
  )  
}