export default function Lista(props) {
  return (
    <div>
      <h1>Salve</h1>
      <ul style={{
        liststyle: "none"
      }}>
        {props.children}
      </ul>
  </div>
  )  
}