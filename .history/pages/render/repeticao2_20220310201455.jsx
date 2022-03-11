import listaProdutos from "../../data/listaProdutos";

export default function repeticao2() {

  function renderizarLinhas () {
    return listaProdutos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td></td>
        </tr>
      )
    })
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Codigo</th>
            <th>Nome</th>
            <th>Preco</th>
          </tr>
        </thead>
        <tbody>
          {renderizarLinhas()}
        </tbody>
      </table>
    </div>
  )
}