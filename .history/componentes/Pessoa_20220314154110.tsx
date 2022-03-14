interface PessoaProps {
  nome: String
  idade ?:
}

export default function Pessoa(props: PessoaProps) {
  return (
    <div>
      <div>Nome: {props.nome}</div>
      <div>Nome: {props.idade}</div>
    </div>
  )
}