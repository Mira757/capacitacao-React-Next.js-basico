export default function spansAutomaticos () {
  return (
    <div>
      <h1>{ForSpan(10)}</h1>
    </div>
  )
}

function ForSpan (valordespans) {
  for(let i=1;i<=valordespans;i++) {
     return <span>i</span>
  }
}
  