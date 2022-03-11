export default function repeticao1 () {
  const listaAprovados = [
    'Joao',
    'Bruna',
    'Luana',
    'Rinaldo'
  ]

  function renderizarLista () {
    return (
      <>
        <li>Elemento #01</li>
        <li>Elemento #02</li>
        <li>Elemento #03</li>
      </>
    )
  }

    return (
      <ul>
        {renderizarLista()}
      </ul>
    )
}