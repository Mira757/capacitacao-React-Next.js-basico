export default function spansAutomaticos () {
  return (
    <div>
      <h1>{ForSpan(10)}</h1>
      <span>9</span>
    </div>
  )
}

function ForSpan (valordespans) {
  for(let i=0;i<=valordespans;i++) {
    <span>{i},</span>
  }
}