export default function spansAutomaticos () {
  return (
    <div>
      {ForSpan(20)}
    </div>
  )
}

function ForSpan (valordespans = 10) {
  const lista = []
  for(let i=1;i<=valordespans;i++) {
     lista.push(<span>{i},</span>) 
  }

  return lista

}
  