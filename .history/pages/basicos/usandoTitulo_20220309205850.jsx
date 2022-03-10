import Titulo from '../../componentes/Titulo'

export default function usandoTitulo () {
  return (
    <div>
      <Titulo 
        principal="Pagina de cadastro" 
        secundario="Incluir,alterar e excluir coisas!"
      />
       <Titulo 
        principal="Pagina de Login" 
        secundario="Email e senha"
      />
    </div>
  )
}