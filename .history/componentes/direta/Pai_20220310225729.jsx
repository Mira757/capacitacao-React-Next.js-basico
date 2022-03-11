import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Familia {props.familia}</h1>
      <Filho nome="Joao" familia={props.familia}/>
      <Filho nome="Julia" familia={props.familia}/>
      <Filho nome="Maria" familia={props.familia}/>
      <Filho nome="Luana" familia={props.familia}/>
    </div>
  )
}