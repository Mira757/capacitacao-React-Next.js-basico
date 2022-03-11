import Filho from "./Filho";

export default function Pai() {
  return (
    <div>
      <Filho nome="Joao" familia="Mira"/>
      <Filho nome="Julia" familia="Garcia"/>
      <Filho nome="Maria" familia="Medeiros"/>
    </div>
  )
}