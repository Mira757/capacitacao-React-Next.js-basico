import Item from "../../componentes/Item";
import Lista from "../../componentes/Lista";

export default function componenteComFilho {
  return (
    <div>
      <Lista>
        <Item conteudo="Item 1"/>
        <Item conteudo="Item 2"/>
        <Item conteudo="Item 3"/>
      </Lista>
    </div>
  )
}