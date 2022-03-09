export default function spansAutomaticos () {
  return (
    <div>
      <h1>{ForSpan(10)}</h1>
      
    </div>
  )
}

function ForSpan (valordespans) {
  return (for(let i=0;i<=valordespans;i++) {
    <span>{i}</span>
  }
}
  )