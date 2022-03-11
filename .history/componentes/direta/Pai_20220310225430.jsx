import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Joao" familia={props.familia}/>
      <Filho nome="Julia" familia={props.familia}/>
      <Filho nome="Maria" familia={props.familia}/>
    </div>
  )
}