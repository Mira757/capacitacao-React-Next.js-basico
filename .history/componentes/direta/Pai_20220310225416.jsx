import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Filho from "./Filho";

export default function Pai() {
  return (
    <div>
      <Filho nome="Joao" familia={props.familia}/>
      <Filho nome="Julia" familia="Garcia"/>
      <Filho nome="Maria" familia="Medeiros"/>
    </div>
  )
}