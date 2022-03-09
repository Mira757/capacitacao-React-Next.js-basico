export default function spansAutomaticos () {
  return (
    <div>
      <h1>alo</h1>
      {ForSpan}
    </div>
  )
}

function ForSpan (valordespans) {
  for(i=0;i<=valordespans;i++) {
    <span>{i},</span>
  }
}