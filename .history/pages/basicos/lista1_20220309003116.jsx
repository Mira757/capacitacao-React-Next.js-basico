export default function spansAutomaticos () {
  return (
    <div>
      <h1>{ForSpan(10)}</h1>

    </div>
  )
}

function ForSpan (valordespans) {
  for(let i=0;i<valordespans+1;i++) {
    <span>{i},</span>
  }
}