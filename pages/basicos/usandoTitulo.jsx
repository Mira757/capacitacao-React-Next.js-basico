import Titulo from '../../componentes/Titulo'

export default function usandoTitulo () {
  return (
    <div>
      <Titulo 
        principal="Pagina de cadastro" 
        secundario="Incluir,alterar e excluir coisas!"
        pequeno = {true}
      />
       <Titulo 
        principal="Pagina de Login" 
        secundario="Email e senha"
        pequeno // por padrao e falso, mas quando coloca e true
      />
    </div>
  )
}