export default function spansAutomaticos () {
  return (
    <div>
      {ForSpan}
    </div>
  )
}

function ForSpan (valordespans) {
  for(i=0;i<=valordespans;i++) {
    <span>{i},</span>
  }
}