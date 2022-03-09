export default function spansAutomaticos () {
  return (
    <div>
      <h1>alo</h1>
      ForSpan(10)
    </div>
  )
}

function ForSpan (valordespans) {
  for(let i=0;i<=valordespans;i++) {
    <span>{i},</span>
  }
}