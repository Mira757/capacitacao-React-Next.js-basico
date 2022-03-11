export default function repeticao1 () {
  const listaAprovados = [
    'Joao',
    'Bruna',
    'Luana',
    'Rinaldo',
    'Eloa',
    'Kayque'
  ]

  function renderizarLista () {
    const jsx = []

    for (let i=0;i < listaAprovados.length;i++) {
      itens.push(<li>{listaAprovados[i]}</li>)
    }

    return (
      <>
        <li>Elemento #01</li>
        <li>Elemento #02</li>
        <li>Elemento #03</li>
        <li>Elemento #04</li>
      </>
    )
  }

    return (
      <ul>
        {renderizarLista()}
      </ul>
    )
}