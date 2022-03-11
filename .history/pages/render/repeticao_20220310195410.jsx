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
    const itens = []

    for (let i=0;i < listaAprovados.length;i++) {
      itens.push(<li key={i}>{listaAprovados[i]}</li>)
    }

    return itens
  }

    return (
      <ul>
        {renderizarLista()}
      </ul>
    )
}