export default function SomentePar (props) {
  const numeroPar = props.numero % 2 === 0
  return (
    <div>
      {numeroPar ? <span>{props.numero}</span> : null} 
    </div>
  )
}

/*if(props.numero % 2 === 0) {
  return <h1>{props.numero}</h1>
} else {
  return null
}*/